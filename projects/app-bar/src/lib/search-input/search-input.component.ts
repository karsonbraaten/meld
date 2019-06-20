import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core'

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder = 'Search...'
  @Input() value = ''
  @Output() search = new EventEmitter<string>()

  @ViewChild('input', { static: true }) input: ElementRef

  constructor() {}

  ngOnInit() {}

  focus() {
    this.input.nativeElement.focus()
  }

  onClear(input: HTMLInputElement) {
    input.value = ''
    input.focus()
    this.search.emit('')
  }

  onInput(query: string) {
    this.search.emit(query)
  }
}
