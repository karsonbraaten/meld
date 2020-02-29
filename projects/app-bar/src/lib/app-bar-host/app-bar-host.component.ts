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

import { SearchInputComponent } from '../search-input/search-input.component'

import { AppBarService } from '../app-bar.service'
import { Search, NavigationAction } from '../model'

@Component({
  selector: 'ngx-app-bar-host',
  templateUrl: './app-bar-host.component.html',
  styleUrls: ['./app-bar-host.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBarHostComponent implements OnInit, OnDestroy {
  @Input() color: ThemePalette = undefined

  @Output() filter = new EventEmitter()
  @Output() showFilter = new EventEmitter<boolean>()
  @Output() navigate = new EventEmitter<NavigationAction>()

  @ViewChild('searchInput') set searchInput(
    input: SearchInputComponent | null
  ) {
    if (!input) {
      return
    }
    input.focus()
  }

  search$: Observable<Search>
  private filterSub: Subscription
  private navigateSub: Subscription
  private showFilterSub: Subscription

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

  onDone() {
    this.appBar.doneSearch()
  }

  onSearch(term: string) {
    this.appBar.search(term)
  }
}
