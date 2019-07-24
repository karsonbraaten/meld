import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
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

export interface ColumnTitle<T> {
  title: string
  key: Extract<keyof T, string>
}

export type Column<T> = Extract<keyof T, string> | ColumnTitle<T>

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
  @Input() columns: Column<T>[] = []
  @Input() items: T[]

  view$: Observable<ListView>
  dataSource = new MatTableDataSource<T>([])
  selectionModel = new SelectionModel<T>(true, [])

  constructor(
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {}

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

  clear() {
    this.selectionModel.clear()
    this.cdr.detectChanges()
  }

  get allColumns(): string[] {
    const select = this.disableSelection ? [] : ['select']
    const columns = this.columns.map(col =>
      typeof col === 'string' ? col : col.title
    )
    return [...select, ...columns]
  }

  get visibleColumns(): string[] {
    return this.columns.map(col => (typeof col === 'string' ? col : col.title))
  }

  value(column: string, item: T): string {
    const titles = this.columns.filter(
      (col): col is ColumnTitle<T> => typeof col !== 'string'
    )
    const title = titles.find(col => col.title === column)
    return title ? item[title.key] : item[column]
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
