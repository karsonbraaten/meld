import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
