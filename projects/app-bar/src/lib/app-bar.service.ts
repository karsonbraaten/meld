import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { pluck, distinctUntilChanged } from 'rxjs/operators'

import { Search, NavigationAction } from './model'

const emptySearch: Search = { expanded: false, placeholder: '', term: '' }

@Injectable({
  providedIn: 'root'
})
export class AppBarService {
  private filterSubject = new Subject<void>()
  private navigateSubject = new Subject<NavigationAction>()
  private searchBS = new BehaviorSubject<Search>(emptySearch)
  private showFilterSubject = new Subject<boolean>()

  get filter$(): Observable<void> {
    return this.filterSubject.asObservable()
  }

  get navigate$(): Observable<NavigationAction> {
    return this.navigateSubject.asObservable()
  }

  get search$(): Observable<Search> {
    return this.searchBS.asObservable()
  }

  get searchTerm$(): Observable<string> {
    return this.search$.pipe(
      pluck<Search, string>('term'),
      distinctUntilChanged()
    )
  }

  get showFilter$(): Observable<boolean> {
    return this.showFilterSubject.asObservable()
  }

  constructor() {}

  collapseSearch() {
    this.searchBS.next(emptySearch)
  }

  expandSearch() {
    this.searchBS.next({ ...emptySearch, expanded: true })
  }

  filter() {
    this.filterSubject.next()
  }

  navigate(action: NavigationAction) {
    this.navigateSubject.next(action)
  }

  search(term: string) {
    this.searchBS.next({ ...this.searchBS.value, term })
  }

  setSearch(search: Search) {
    this.searchBS.next(search)
  }

  setShowFilter(show: boolean) {
    this.showFilterSubject.next(show)
  }
}
