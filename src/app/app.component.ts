import { Component, ViewChild } from '@angular/core'
import { NavigationAction } from '@meld/app-bar'
import { ScaffoldComponent } from '@meld/scaffold'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ScaffoldComponent, { static: true }) scaffold: ScaffoldComponent

  onFilter() {
    this.scaffold.toggleSideSheet()
  }

  onNavigate(action: NavigationAction) {
    console.log(action)
    switch (action) {
      case 'menu':
        this.scaffold.toggleDrawer()
      case 'close':
        break
      case 'back':
        break
    }
  }

  title = 'meld'
}
