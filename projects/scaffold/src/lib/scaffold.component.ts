import { Component, AfterContentInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { SideSheetService } from './side-sheet/side-sheet.service'

@Component({
  selector: 'mel-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements AfterContentInit {
  @ViewChild('drawer', { static: true }) drawer: MatSidenav
  @ViewChild('modalSideSheet', { static: false }) modalSideSheet: MatSidenav
  @ViewChild('standardSideSheet', { static: false })
  standardSideSheet: MatSidenav

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sideSheetService: SideSheetService
  ) {}

  ngAfterContentInit() {
    this.drawerOpen$ = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map(({ matches }) => matches))

    this.gtxs$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(({ matches }) => !matches),
      tap(gtxs => {
        this.sideSheetService.attach(gtxs ? 'standard' : 'modal')
      })
    )

    this.sideSheetService.close$.subscribe(_ => this.toggleSideSheet())
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

  drawerOpen$: Observable<boolean>
  gtxs$: Observable<boolean>

  private get isGtxs(): boolean {
    return !this.breakpointObserver.isMatched(Breakpoints.XSmall)
  }
}
