import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppBarModule } from '@ngx-meld/app-bar'

import { HeroesRoutingModule } from './heroes-routing.module'
import { HeroesComponent } from './heroes.component'

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, AppBarModule, HeroesRoutingModule]
})
export class HeroesModule {}
