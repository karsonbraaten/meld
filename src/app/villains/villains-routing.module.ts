import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VillainsComponent } from './villains.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VillainsComponent
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./villains-search/villains-search.module').then(
        m => m.VillainsSearchModule
      )
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRoutingModule {}
