import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    if (this.auth.user) {
      return true
    }

    return this.router.parseUrl('/login')
  }

  constructor(private router: Router, private auth: AuthService) {}
}
