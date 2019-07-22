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
    path: ':id',
    loadChildren: () =>
      import('./villain/villain.module').then(m => m.VillainModule)
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./villains-new/villains-new.module').then(
        m => m.VillainsNewModule
      )
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
