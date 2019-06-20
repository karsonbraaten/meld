import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { pluck, distinctUntilChanged } from 'rxjs/operators'

import { Search, NavigationAction } from './model'

const emptySearch: Search = { expanded: false, placeholder: '', term: '' }

@Injectable({
  providedIn: 'root'
})
export class AppBarService {
  constructor() {}

  collapseSearch() {
    this._search$.next(emptySearch)
  }

  expandSearch() {
    this._search$.next({ ...this._search$.value, expanded: true })
  }

  filter() {
    this._filter$.next()
  }

  navigate(action: NavigationAction) {
    this._navigate$.next(action)
  }

  search(term: string) {
    this._search$.next({ ...this._search$.value, term })
  }

  setSearch(search: Search) {
    this._search$.next(search)
  }

  get filter$(): Observable<void> {
    return this._filter$.asObservable()
  }

  get navigate$(): Observable<NavigationAction> {
    return this._navigate$.asObservable()
  }

  get search$(): Observable<Search> {
    return this._search$.asObservable()
  }

  get searchTerm$(): Observable<string> {
    return this.search$.pipe(
      pluck<Search, string>('term'),
      distinctUntilChanged()
    )
  }

  private _filter$ = new Subject<void>()
  private _navigate$ = new Subject<NavigationAction>()
  private _search$ = new BehaviorSubject<Search>(emptySearch)
}
