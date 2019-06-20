import { Injectable } from '@angular/core'
import { Subject, Observable, ReplaySubject } from 'rxjs'

import { SideSheetStyle } from './model'

@Injectable({
  providedIn: 'root'
})
export class SideSheetService {
  constructor() {}

  attach(style: SideSheetStyle) {
    this._style$.next(style)
  }

  close() {
    this._close$.next()
  }

  get close$(): Observable<void> {
    return this._close$.asObservable()
  }

  get style$(): Observable<SideSheetStyle> {
    return this._style$.asObservable()
  }

  private _close$ = new Subject<void>()
  private _style$ = new ReplaySubject<SideSheetStyle>()
}
