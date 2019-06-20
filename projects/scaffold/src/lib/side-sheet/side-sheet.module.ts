import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PortalModule } from '@angular/cdk/portal'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { SideSheetComponent } from './side-sheet.component'

@NgModule({
  declarations: [SideSheetComponent],
  imports: [CommonModule, PortalModule, MatButtonModule, MatIconModule],
  exports: [SideSheetComponent]
})
export class SideSheetModule {}
