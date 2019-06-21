import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

import { AppBarModule } from '@meld/app-bar'
import { ScaffoldModule } from '@meld/scaffold'

import { VillainsRoutingModule } from './villains-routing.module'
import { VillainsComponent } from './villains.component'

@NgModule({
  declarations: [VillainsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AppBarModule,
    ScaffoldModule,
    VillainsRoutingModule
  ]
})
export class VillainsModule {}
