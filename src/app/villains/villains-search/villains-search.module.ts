import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarModule } from '@ngx-meld/app-bar'

import { VillainsSearchRoutingModule } from './villains-search-routing.module'
import { VillainsSearchComponent } from './villains-search.component'

@NgModule({
  declarations: [VillainsSearchComponent],
  imports: [CommonModule, AppBarModule, VillainsSearchRoutingModule]
})
export class VillainsSearchModule {}
