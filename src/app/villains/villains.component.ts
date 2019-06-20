import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { Villain, VillainService } from '@entities/villain'

@Component({
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villainService: VillainService
  ) {}

  ngOnInit() {
    this.villains$ = this.villainService.list()
  }

  onSearchExpand() {
    this.router.navigate(['search'], { relativeTo: this.route })
  }

  villains$: Observable<Villain[]>
}
