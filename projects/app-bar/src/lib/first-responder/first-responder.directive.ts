import {
  Directive,
  ElementRef,
  Inject,
  PLATFORM_ID,
  AfterViewInit
} from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

@Directive({
  selector: '[firstResponder]'
})
export class FirstResponderDirective implements AfterViewInit {
  readonly platformId: string

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.platformId = platformId
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }
    setTimeout(() => this.element.nativeElement.focus(), 0.5)
    setTimeout(() => (this.element.nativeElement.style.display = 'block'), 0.5)
  }
}
