import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal'
import { Subscription } from 'rxjs'

import { AppBarService } from './app-bar.service'
import { AppBarState, NavigationAction } from './model'

@Component({
  selector: 'ngx-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() bottom = false
  @Input() filterIcon = false
  @Input() searchIcon = false
  @Input() navigationIcon: 'menu' | 'back' | 'cancel' = 'menu'

  @Input() state: AppBarState = 'regular'

  @Input() placeholder: string | null
  @Input() searchText: string | null

  @Output() dismiss = new EventEmitter<void>()
  @Output() searchExpand = new EventEmitter<void>()
  @Output() search = new EventEmitter<string>()

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal

  private portalHost: PortalHost
  private subscription: Subscription

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private appBar: AppBarService
  ) {}

  ngOnInit() {
    const placeholder = this.placeholder
    if (placeholder) {
      this.appBar.setSearch({ placeholder, expanded: true, term: '' })
    }

    const searchText = this.searchText
    if (searchText) {
      this.appBar.setSearch({
        term: searchText,
        expanded: true,
        placeholder: this.placeholder || ''
      })
    }

    if (this.state !== 'search') {
      this.appBar.collapseSearch()
    }

    this.appBar.setShowFilter(this.filterIcon)

    this.subscription = this.appBar.searchTerm$.subscribe(term =>
      this.search.emit(term)
    )
  }

  ngAfterViewInit(): void {
    this.portalHost = new DomPortalHost(
      document.querySelector('#app-bar-content'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    )

    this.portalHost.attach(this.portal)
  }

  ngOnDestroy(): void {
    if (this.portalHost) {
      this.portalHost.detach()
    }
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  onClose() {
    this.state = 'regular'
    this.dismiss.emit()
  }

  onNavigate(action: NavigationAction) {
    this.appBar.navigate(action)
  }

  onSearch() {
    this.state = 'search'
    this.appBar.expandSearch()
    this.searchExpand.emit()
  }

  onFilter() {
    this.appBar.filter()
  }

  get navigationIconName(): 'menu' | 'arrow_back' | 'close' {
    switch (this.navigationIcon) {
      case 'menu':
        return 'menu'
      case 'back':
        return 'arrow_back'
      case 'cancel':
        return 'close'
    }
  }
}
