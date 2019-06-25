import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  Input,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core'
import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal'
import { Subscription } from 'rxjs'

import { SideSheetService } from './side-sheet.service'
import { SideSheetStyle } from './model'

@Component({
  selector: 'side-sheet',
  templateUrl: './side-sheet.component.html',
  styleUrls: ['./side-sheet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideSheetComponent implements AfterViewInit, OnDestroy {
  @Input() titleText: string

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal

  private portalHost: PortalHost
  private subscription: Subscription

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private sideSheetService: SideSheetService
  ) {}

  ngAfterViewInit(): void {
    this.subscription = this.sideSheetService.style$.subscribe(style =>
      this.attach(style)
    )
  }

  ngOnDestroy(): void {
    if (this.portalHost) {
      this.portalHost.detach()
    }
    this.subscription.unsubscribe()
  }

  onClose() {
    this.sideSheetService.close()
  }

  attach(style: SideSheetStyle) {
    if (this.portalHost) {
      this.portalHost.detach()
    }

    const selector =
      style === 'modal' ? '#modal-side-sheet' : '#standard-side-sheet'

    this.portalHost = new DomPortalHost(
      document.querySelector(selector),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    )

    this.portalHost.attach(this.portal)
  }
}
