import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

export interface User {
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get user(): User | null {
    return this.userSubject.value
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable()
  }

  private userSubject = new BehaviorSubject<User | null>(null)

  constructor() {}

  signIn(email: string) {
    this.userSubject.next({ email })
  }

  signOut() {
    this.userSubject.next(null)
  }
}
