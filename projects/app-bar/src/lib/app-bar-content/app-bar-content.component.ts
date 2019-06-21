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
  ChangeDetectionStrategy
} from '@angular/core'
import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal'
import { Subscription } from 'rxjs'

import { AppBarService } from '../app-bar.service'
import { AppBarState, NavigationAction } from '../model'

@Component({
  selector: 'app-bar-content',
  templateUrl: './app-bar-content.component.html',
  styleUrls: ['./app-bar-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBarContentComponent implements OnInit, AfterViewInit {
  @Input() bottom: boolean = false
  @Input() filterIcon: boolean = false
  @Input() searchIcon: boolean = false

  @Input() state: AppBarState = 'regular'

  @Input() placeholder: string | null
  @Input() term: string | null

  @Output() close = new EventEmitter<void>()
  @Output() searchExpand = new EventEmitter<void>()
  @Output() searchTerm = new EventEmitter<string>()

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal

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

    const term = this.term
    if (term) {
      this.appBar.setSearch({
        term,
        expanded: true,
        placeholder: this.placeholder || ''
      })
    }

    if (this.state !== 'search') {
      this.appBar.collapseSearch()
    }

    this.appBar.setShowFilter(this.filterIcon)

    this.subscription = this.appBar.searchTerm$.subscribe(term =>
      this.searchTerm.emit(term)
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
    this.portalHost.detach()
    this.subscription.unsubscribe()
  }

  onClose() {
    this.state = 'regular'
    this.close.emit()
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

  get navigationIcon(): 'menu' | 'arrow_back' {
    return this.state === 'regular' ? 'menu' : 'arrow_back'
  }

  private portalHost: PortalHost
  private subscription: Subscription
}
