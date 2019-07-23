import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { SelectionModel } from '@angular/cdk/collections'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'

export interface ListItem {
  title: string
  subtitle?: string
  link?: string
}

type ListMode = 'select' | 'nav'
type ListView = 'list' | 'table'

@Component({
  providers: [BreakpointObserver],
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<T> implements OnChanges, OnInit, OnDestroy {
  @Input() disableSelection = false
  @Input() displayWith: (value: T) => ListItem
  @Input() columns: (Extract<keyof T, string>)[] = [] // TODO: @Input() fields replace columns and items
  @Input() items: T[]

  mode$: Observable<ListMode>
  view$: Observable<ListView>
  dataSource = new MatTableDataSource<T>([])
  selectionControl = this.fb.control([], Validators.required)
  selectionModel = new SelectionModel<T>(true, [])
  private subscription = this.selectionModel.changed.subscribe(change =>
    this.selectionControl.setValue(change.source.selected)
  )

  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnChanges({ items: { currentValue } }: SimpleChanges) {
    if (currentValue) {
      this.dataSource.data = currentValue
    }
  }

  ngOnInit() {
    this.mode$ = this.selectionControl.statusChanges.pipe(
      startWith('INVALID'),
      map(status => (status === 'VALID' ? 'select' : 'nav'))
    )

    this.view$ = this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map(({ matches }) => (matches ? 'list' : 'table')))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selectionModel.clear()
      : this.dataSource.data.forEach(row => this.selectionModel.select(row))
  }

  isAllSelected(): boolean {
    const selectedLength = this.selectionModel.selected.length
    const numRows = this.dataSource.data.length
    return selectedLength === numRows
  }

  selectAll() {
    this.items.forEach(item => this.selectionModel.select(item))
  }

  deselectAll() {
    this.selectionModel.clear()
  }

  clear() {
    this.selectionModel.clear()
  }

  get allColumns(): string[] {
    return ['select', ...this.columns]
  }

  get selected(): T[] {
    return this.selectionControl.value
  }

  onCheckboxChange({ source: { value } }: MatCheckboxChange) {
    this.selectionModel.toggle(value as any)
  }

  onRowClick(item: T) {
    console.log('row', item)
  }
}
