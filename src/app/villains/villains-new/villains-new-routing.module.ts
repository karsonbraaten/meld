import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VillainsNewComponent } from './villains-new.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VillainsNewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsNewRoutingModule {}
