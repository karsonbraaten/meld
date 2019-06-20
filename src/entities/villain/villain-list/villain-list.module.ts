import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainListComponent } from './villain-list.component';

@NgModule({
  declarations: [VillainListComponent],
  imports: [
    CommonModule
  ],
  exports: [VillainListComponent]
})
export class VillainListModule { }
