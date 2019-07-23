import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { Villain, VillainService } from '@entities/villain'
import { ListItem } from '@ngx-meld/list'

@Component({
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  displayWith(villain: Villain): ListItem {
    return {
      title: villain.name,
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
