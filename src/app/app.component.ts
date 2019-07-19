import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common'
import {
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core'
import { Router } from '@angular/router'

import { NavigationAction } from '@ngx-meld/app-bar'
import { ScaffoldComponent } from '@ngx-meld/scaffold'
import { Observable, BehaviorSubject } from 'rxjs'
import { AuthService, User } from './auth.service'

@Component({
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('scaffold', { static: false })
  set scaffoldRef(ref: ScaffoldComponent) {
    this.scaffold = ref
    this.onShowFilter(this.showFilter$.value)
  }
  private scaffold: ScaffoldComponent

  showFilter$ = new BehaviorSubject<boolean>(false)

  user$: Observable<User | null>

  constructor(
    private router: Router,
    private location: Location,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.user$ = this.auth.user$
  }

  onFilter() {
    this.scaffold.toggleSideSheet()
  }

  onShowFilter(show: boolean) {
    this.showFilter$.next(show)

    if (!this.scaffold) {
      return
    }

    if (show) {
      this.scaffold.enableSideSheetOpening()
      this.scaffold.openStandardSideSheet()
    } else {
      this.scaffold.disableSideSheetOpening()
    }
  }

  onSignOut() {
    this.auth.signOut()
    this.router.navigateByUrl('/login')
  }

  onNavigate(action: NavigationAction) {
    switch (action) {
      case 'menu':
        this.scaffold.toggleDrawer()
        break
      case 'back':
        if (this.router.url.includes('search')) {
          const url = this.router.url.replace('/search', '').split('?')[0] // 🤷‍♂️
          this.router.navigateByUrl(`/${url}`)
        } else {
          this.location.back()
        }
        break
    }
  }
}
