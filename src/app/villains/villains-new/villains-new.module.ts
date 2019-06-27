import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'

import { AppBarModule } from '@ngx-meld/app-bar'
import { VillainFormModule } from '@entities/villain'

import { VillainsNewRoutingModule } from './villains-new-routing.module'
import { VillainsNewComponent } from './villains-new.component'

@NgModule({
  declarations: [VillainsNewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppBarModule,
    VillainFormModule,
    VillainsNewRoutingModule
  ]
})
export class VillainsNewModule {}
