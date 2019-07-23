import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list'

import { ListComponent } from './list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [ListComponent]
})
export class ListModule {}
