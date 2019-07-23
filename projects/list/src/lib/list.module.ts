import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LayoutModule } from '@angular/cdk/layout'
import { RouterModule } from '@angular/router'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'

import { ListComponent } from './list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule
  ],
  exports: [ListComponent]
})
export class ListModule {}
