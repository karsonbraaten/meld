import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import { SelectionModel } from '@angular/cdk/collections'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface ListItem {
  title: string
  subtitle?: string
  link?: string
}

type ListView = 'list' | 'table'

@Component({
  providers: [BreakpointObserver],
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<T> implements OnChanges, OnInit {
  @Input() disableSelection = false
  @Input() displayWith: (value: T) => ListItem
  @Input() columns: (Extract<keyof T, string>)[] = [] // TODO: @Input() fields replace columns and items
  @Input() items: T[]

  view$: Observable<ListView>
  dataSource = new MatTableDataSource<T>([])
  selectionModel = new SelectionModel<T>(true, [])

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges({ items: { currentValue } }: SimpleChanges) {
    if (currentValue) {
      this.dataSource.data = currentValue
    }
  }

  ngOnInit() {
    this.view$ = this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map(({ matches }) => (matches ? 'list' : 'table')))
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
    const select = this.disableSelection ? [] : ['select']
    return [...select, ...this.columns]
  }

  get selected(): T[] {
    return this.selectionModel.selected
  }

  onCheckboxChange({ source: { value } }: MatCheckboxChange) {
    this.selectionModel.toggle(value as any)
  }

  onRowClick(item: T) {
    console.log('row', item)
  }
}
