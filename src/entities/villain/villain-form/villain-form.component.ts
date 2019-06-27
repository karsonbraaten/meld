import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Villain } from '../villain'

@Component({
  selector: 'villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainFormComponent implements OnInit {
  form: FormGroup

  get invalid(): boolean {
    return this.form.invalid
  }

  get value(): Villain {
    return this.form.value
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      alter_ego: [],
      first_appearance: ['', Validators.required],
      creator: ['', Validators.required],
      description: []
    })
  }

  ngOnInit() {}
}
