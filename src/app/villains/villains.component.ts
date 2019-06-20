import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Villain, VillainService } from '@entities/villain'

@Component({
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.villains$ = this.villainService.list()
  }

  villains$: Observable<Villain[]>
}
