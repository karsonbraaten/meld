import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'

import { SelectionModel } from '@angular/cdk/collections'

export interface ListItem {
  title: string
  link?: string
}

type ListMode = 'select' | 'nav'

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<T> implements OnInit, OnDestroy {
  @Input() disableSelection = false
  @Input() displayWith: (value: T) => ListItem
  @Input() items: T[]

  mode$: Observable<ListMode>
  selectionControl = this.fb.control([], Validators.required)
  private selectionModel = new SelectionModel<T>(true, [])
  private subscription = this.selectionModel.changed.subscribe(change =>
    this.selectionControl.setValue(change.source.selected)
  )

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.mode$ = this.selectionControl.statusChanges.pipe(
      startWith('INVALID'),
      map(status => (status === 'VALID' ? 'select' : 'nav'))
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  clear() {
    this.selectionModel.clear()
  }

  get selected(): T[] {
    return this.selectionControl.value
  }

  onCheckboxChange({ source: { value } }: MatCheckboxChange) {
    this.selectionModel.toggle(value as any)
  }
}
