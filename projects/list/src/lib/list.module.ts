import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MatListModule } from '@angular/material/list'

import { ListComponent } from './list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [ListComponent]
})
export class ListModule {}
