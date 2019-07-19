import { Injectable } from '@angular/core'
import { Subject, Observable, BehaviorSubject } from 'rxjs'

import { SideSheetStyle } from './model'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SideSheetService {
  private closeSubject = new Subject<void>()
  private styleSubject = new BehaviorSubject<SideSheetStyle>('none')

  get close$(): Observable<void> {
    return this.closeSubject.asObservable()
  }

  get style$(): Observable<SideSheetStyle> {
    return this.styleSubject
      .asObservable()
      .pipe(filter(style => style !== 'none'))
  }

  attach(style: SideSheetStyle) {
    this.styleSubject.next(style)
  }

  close() {
    this.closeSubject.next()
  }
}
