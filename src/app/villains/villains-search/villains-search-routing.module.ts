import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VillainsSearchComponent } from './villains-search.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VillainsSearchComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsSearchRoutingModule {}
