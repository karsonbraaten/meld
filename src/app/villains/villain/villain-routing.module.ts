import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VillainComponent } from './villain.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VillainComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainRoutingModule {}
