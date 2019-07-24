import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { ListItem, Column } from '@ngx-meld/list'

import { Villain, VillainService } from '@entities/villain'

@Component({
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainsComponent implements OnInit {
  villains$: Observable<Villain[]>

  columns: Column<Villain>[] = [
    'name',
    { title: 'Alter Ego', key: 'alter_ego' },
    'creator'
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villainService: VillainService
  ) {}

  ngOnInit() {
    this.villains$ = this.villainService.list()
  }

  displayWith(villain: Villain): ListItem {
    return {
      title: villain.name,
      subtitle: villain.alter_ego,
      link: `${villain.id}`
    }
  }

  onDelete(villains: Villain[]) {
    console.log('delete', villains)
  }

  onSearchExpand() {
    this.router.navigate(['search'], { relativeTo: this.route })
  }
}
