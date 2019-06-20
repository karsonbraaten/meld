import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstResponderDirective } from './first-responder.directive'

@NgModule({
  declarations: [FirstResponderDirective],
  imports: [CommonModule],
  exports: [FirstResponderDirective]
})
export class FirstResponderModule {}
