import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'

import { Villain } from '@entities/villain'

@Component({
  templateUrl: './villains-new.component.html',
  styleUrls: ['./villains-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainsNewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSave(villain: Villain) {
    console.log(villain)
    this.router.navigateByUrl('/villains')
  }
}
