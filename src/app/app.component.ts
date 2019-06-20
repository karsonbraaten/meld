import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common'
import { Component, ViewChild } from '@angular/core'

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

  constructor(private location: Location) {}

  onFilter() {
    this.scaffold.toggleSideSheet()
  }

  onNavigate(action: NavigationAction) {
    switch (action) {
      case 'menu':
        this.scaffold.toggleDrawer()
      case 'close':
        break
      case 'back':
        this.location.back()
        break
    }
  }

  title = 'meld'
}
