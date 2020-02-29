import {
  Component,
  AfterContentInit,
  ViewChild,
  Input,
  OnDestroy
} from '@angular/core'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { SideSheetService } from './side-sheet/side-sheet.service'

@Component({
  selector: 'ngx-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements AfterContentInit, OnDestroy {
  @Input() disableDrawer = false
  @Input() disableSideSheet = false

  @ViewChild('drawer') drawer: MatSidenav
  @ViewChild('modalSideSheet') modalSideSheet: MatSidenav
  @ViewChild('standardSideSheet')
  standardSideSheet: MatSidenav

  drawerOpen$: Observable<boolean>
  standardSideSheetOpen$: Observable<boolean>

  private isSideSheetOpenDisabled$ = new BehaviorSubject<boolean>(false)

  private get isGtxs(): boolean {
    return !this.breakpointObserver.isMatched(Breakpoints.XSmall)
  }

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private sideSheetService: SideSheetService
  ) {}

  ngAfterContentInit() {
    this.drawerOpen$ = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map(({ matches }) => matches))

    const gtxs$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(({ matches }) => !matches),
      tap(gtxs => this.sideSheetService.attach(gtxs ? 'standard' : 'modal'))
    )

    this.standardSideSheetOpen$ = combineLatest(
      gtxs$,
      this.isSideSheetOpenDisabled$
    ).pipe(map(([gtxs, openDisabled]) => gtxs && !openDisabled))

    this.router.events.subscribe(() => {
      if (this.drawer.mode === 'over') {
        this.drawer.close()
      }
    })

    this.sideSheetService.close$.subscribe(_ => this.toggleSideSheet())
  }

  ngOnDestroy() {
    this.sideSheetService.attach('none')
  }

  disableSideSheetOpening() {
    this.isSideSheetOpenDisabled$.next(true)
  }

  enableSideSheetOpening() {
    this.isSideSheetOpenDisabled$.next(false)
  }

  openStandardSideSheet() {
    if (this.isGtxs) {
      this.standardSideSheet.open()
    }
  }

  closeSideSheet() {
    this.isGtxs ? this.standardSideSheet.close() : this.modalSideSheet.close()
  }

  toggleSideSheet() {
    this.isGtxs ? this.standardSideSheet.toggle() : this.modalSideSheet.toggle()
  }

  toggleDrawer() {
    this.drawer.toggle()
  }
}
