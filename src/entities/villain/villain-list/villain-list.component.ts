import { Component, OnInit, Input } from '@angular/core'

import { Villain } from '../villain'

@Component({
  selector: 'villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss']
})
export class VillainListComponent implements OnInit {
  @Input() villains: Villain[]

  constructor() {}

  ngOnInit() {}
}
