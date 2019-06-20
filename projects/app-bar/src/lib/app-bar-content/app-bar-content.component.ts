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
  EventEmitter
} from '@angular/core'
import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal'
import { Subscription } from 'rxjs'

import { AppBarService } from '../app-bar.service'
import { Search, AppBarState, NavigationAction } from '../model'

@Component({
  selector: 'app-bar-content',
  templateUrl: './app-bar-content.component.html',
  styleUrls: ['./app-bar-content.component.css']
})
export class AppBarContentComponent implements OnInit, AfterViewInit {
  @Input() bottom: boolean = false
  @Input() filterIcon: boolean = false
  @Input() search: Search | null
  @Input() searchIcon: boolean = false
  @Input() state: AppBarState = 'regular'

  @Output() searchExpand = new EventEmitter()
  @Output() searchTerm = new EventEmitter<string>()

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private appBar: AppBarService
  ) {}

  ngOnInit() {
    if (this.search) {
      this.appBar.setSearch(this.search)
    }

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

  onNavigate(action: NavigationAction) {
    this.appBar.navigate(action)
  }

  onSearch() {
    this.searchExpand.emit()
    this.appBar.expandSearch()
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
