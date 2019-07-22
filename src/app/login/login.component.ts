import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  onSignIn() {
    this.auth.signIn('karsonbraaten@gmail.com')
    this.router.navigateByUrl('/villains')
  }
}
