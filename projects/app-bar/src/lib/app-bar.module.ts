import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PortalModule } from '@angular/cdk/portal'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

import { SearchInputModule } from './search-input/search-input.module'

import { AppBarComponent } from './app-bar.component'
import { AppBarContentComponent } from './app-bar-content/app-bar-content.component'

@NgModule({
  declarations: [AppBarComponent, AppBarContentComponent],
  imports: [
    CommonModule,
    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    SearchInputModule
  ],
  exports: [AppBarComponent, AppBarContentComponent]
})
export class AppBarModule {}
