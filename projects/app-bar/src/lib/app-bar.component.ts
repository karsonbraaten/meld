import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core'
import { ThemePalette } from '@angular/material'
import { Observable, Subscription } from 'rxjs'

import { SearchInputComponent } from './search-input/search-input.component'

import { AppBarService } from './app-bar.service'
import { Search, NavigationAction } from './model'

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBarComponent implements OnInit, OnDestroy {
  @Input() color: ThemePalette = undefined

  @Output() filter = new EventEmitter()
  @Output() showFilter = new EventEmitter<boolean>()
  @Output() navigate = new EventEmitter<NavigationAction>()

  @ViewChild('searchInput', { static: false }) set searchInput(
    input: SearchInputComponent | null
  ) {
    if (!input) return
    input.focus()
  }

  constructor(private appBar: AppBarService) {}

  ngOnInit() {
    this.search$ = this.appBar.search$

    this.filterSub = this.appBar.filter$.subscribe(_ => this.filter.emit())

    this.navigateSub = this.appBar.navigate$.subscribe(action =>
      this.navigate.emit(action)
    )

    this.showFilterSub = this.appBar.showFilter$.subscribe(show =>
      this.showFilter.emit(show)
    )
  }

  ngOnDestroy() {
    this.filterSub.unsubscribe()
    this.navigateSub.unsubscribe()
    this.showFilterSub.unsubscribe()
  }

  onClose(event: Event) {
    event.stopPropagation()
    this.appBar.navigate('back')
  }

  onSearch(term: string) {
    this.appBar.search(term)
  }

  search$: Observable<Search>
  private filterSub: Subscription
  private navigateSub: Subscription
  private showFilterSub: Subscription
}
