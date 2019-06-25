import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PortalModule } from '@angular/cdk/portal'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

import { SearchInputModule } from './search-input/search-input.module'

import { AppBarHostComponent } from './app-bar-host.component'
import { AppBarContentComponent } from './app-bar-content/app-bar-content.component'

@NgModule({
  declarations: [AppBarHostComponent, AppBarContentComponent],
  imports: [
    CommonModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    SearchInputModule
  ],
  exports: [AppBarHostComponent, AppBarContentComponent]
})
export class AppBarModule {}
