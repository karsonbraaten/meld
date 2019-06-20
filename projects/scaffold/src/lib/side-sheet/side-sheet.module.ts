import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSheetComponent } from './side-sheet.component';

@NgModule({
  declarations: [SideSheetComponent],
  imports: [
    CommonModule
  ],
  exports: [SideSheetComponent]
})
export class SideSheetModule { }
