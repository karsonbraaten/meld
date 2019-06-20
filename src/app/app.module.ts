import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ScaffoldModule } from '@meld/scaffold'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScaffoldModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
