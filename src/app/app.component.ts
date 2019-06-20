import { Component } from '@angular/core'
import { NavigationAction } from '@meld/app-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meld'

  onNavigate(action: NavigationAction) {
    console.log(action)
  }
}
