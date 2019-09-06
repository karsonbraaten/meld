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
  OnDestroy,
  SimpleChanges
} from '@angular/core'
import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

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
  @Input() doneText: string | null
  @Input() showDone: boolean = false

  @Output() dismiss = new EventEmitter<void>()
  @Output() done = new EventEmitter<void>() // TODO: scrap this output in host
  @Output() searchExpand = new EventEmitter<void>()
  @Output() search = new EventEmitter<string>()

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal

  private portalHost: PortalHost

  private destroy$ = new Subject<boolean>()

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private appBar: AppBarService
  ) {}

  ngOnInit() {
    const placeholder = this.placeholder
    if (placeholder) {
      this.appBar.setSearch({
        placeholder,
        expanded: true,
        term: '',
        doneText: this.doneText || 'Done',
        showDone: this.showDone
      })
    }

    const searchText = this.searchText
    if (searchText) {
      this.appBar.setSearch({
        term: searchText,
        expanded: true,
        placeholder: this.placeholder || '',
        doneText: this.doneText || 'Done',
        showDone: this.showDone
      })
    }

    if (this.state !== 'search') {
      this.appBar.collapseSearch()
    }

    this.appBar.setShowFilter(this.filterIcon)

    this.appBar.searchTerm$
      .pipe(takeUntil(this.destroy$))
      .subscribe(term => this.search.emit(term))

    this.appBar.doneSearch$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.done.emit())
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

  ngOnChanges({ showDone: { currentValue } }: SimpleChanges): void {
    this.appBar.setShowDone(currentValue)
  }

  ngOnDestroy(): void {
    if (this.portalHost) {
      this.portalHost.detach()
    }
    this.destroy$.next(true)
    this.destroy$.complete()
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
