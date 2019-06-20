import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SideSheetModule } from './side-sheet/side-sheet.module'

import { ScaffoldComponent } from './scaffold.component'

@NgModule({
  declarations: [ScaffoldComponent],
  imports: [CommonModule, SideSheetModule],
  exports: [ScaffoldComponent]
})
export class ScaffoldModule {}
