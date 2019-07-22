import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainRoutingModule } from './villain-routing.module';
import { VillainComponent } from './villain.component';

@NgModule({
  declarations: [VillainComponent],
  imports: [
    CommonModule,
    VillainRoutingModule
  ]
})
export class VillainModule { }
