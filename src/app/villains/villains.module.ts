import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

import { AppBarModule } from '@ngx-meld/app-bar'
import { ListModule } from '@ngx-meld/list'
import { ScaffoldModule } from '@ngx-meld/scaffold'

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
    ListModule,
    ScaffoldModule,
    VillainsRoutingModule
  ]
})
export class VillainsModule {}
