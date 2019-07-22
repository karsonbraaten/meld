import { Component, OnInit, Input } from '@angular/core'

export interface ListItem {
  title: string
  link?: string
}

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> implements OnInit {
  @Input() displayWith: (value: T) => ListItem
  @Input() items: T[]

  constructor() {}

  ngOnInit() {}
}
