import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarModule } from '@meld/app-bar'
import { ScaffoldModule } from '@meld/scaffold'

import { VillainListModule } from '@entities/villain'

import { VillainsRoutingModule } from './villains-routing.module'
import { VillainsComponent } from './villains.component'

@NgModule({
  declarations: [VillainsComponent],
  imports: [
    CommonModule,
    AppBarModule,
    ScaffoldModule,
    VillainListModule,
    VillainsRoutingModule
  ]
})
export class VillainsModule {}
