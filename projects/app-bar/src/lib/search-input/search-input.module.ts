import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { FirstResponderModule } from '../first-responder/first-responder.module'

import { SearchInputComponent } from './search-input.component'

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, FirstResponderModule],
  exports: [SearchInputComponent]
})
export class SearchInputModule {}
