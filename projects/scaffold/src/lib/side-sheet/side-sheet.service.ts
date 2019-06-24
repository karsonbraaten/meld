import { Injectable } from '@angular/core'
import { Subject, Observable, ReplaySubject } from 'rxjs'

import { SideSheetStyle } from './model'

@Injectable({
  providedIn: 'root'
})
export class SideSheetService {
  private closeSubject = new Subject<void>()
  private styleRS = new ReplaySubject<SideSheetStyle>()

  get close$(): Observable<void> {
    return this.closeSubject.asObservable()
  }

  get style$(): Observable<SideSheetStyle> {
    return this.styleRS.asObservable()
  }

  constructor() {}

  attach(style: SideSheetStyle) {
    this.styleRS.next(style)
  }

  close() {
    this.closeSubject.next()
  }
}
