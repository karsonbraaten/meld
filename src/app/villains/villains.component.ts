import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MatListOption } from '@angular/material'
import { Observable } from 'rxjs'

import { Villain, VillainService } from '@entities/villain'

@Component({
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  villains$: Observable<Villain[]>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villainService: VillainService
  ) {}

  ngOnInit() {
    this.villains$ = this.villainService.list()
  }

  onDelete(options: MatListOption[]) {
    const villains: Villain[] = options.map(({ value }) => value)
    console.log('delete', villains)
  }

  onSearchExpand() {
    this.router.navigate(['search'], { relativeTo: this.route })
  }
}
