import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common'
import { Component, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

import { NavigationAction } from '@meld/app-bar'
import { ScaffoldComponent } from '@meld/scaffold'

@Component({
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ScaffoldComponent, { static: true }) scaffold: ScaffoldComponent

  constructor(private router: Router, private location: Location) {}

  onFilter() {
    this.scaffold.toggleSideSheet()
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
