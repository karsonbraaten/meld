import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  templateUrl: './villains-search.component.html',
  styleUrls: ['./villains-search.component.scss']
})
export class VillainsSearchComponent implements OnInit {
  query$: Observable<string>

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.query$ = this.route.queryParamMap.pipe(map(params => params.get('q')))
    this.query$.subscribe(query => console.log(query))
  }

  onSearch(q: string) {
    const queryParams = q ? { q } : {}
    const relativeTo = this.route
    this.router.navigate(['.'], { relativeTo, queryParams })
  }
}
