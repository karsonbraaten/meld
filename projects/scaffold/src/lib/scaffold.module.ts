import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutModule } from '@angular/cdk/layout'
import { PortalModule } from '@angular/cdk/portal'
import { MatSidenavModule } from '@angular/material'

import { SideSheetModule } from './side-sheet/side-sheet.module'

import { ScaffoldComponent } from './scaffold.component'

@NgModule({
  declarations: [ScaffoldComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    PortalModule,
    MatSidenavModule,
    SideSheetModule
  ],
  exports: [SideSheetModule, ScaffoldComponent]
})
export class ScaffoldModule {}
