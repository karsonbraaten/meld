import { TestBed } from '@angular/core/testing'

import { AppBarService } from './app-bar.service'

describe('AppBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: AppBarService = TestBed.get(AppBarService)
    expect(service).toBeTruthy()
  })
})
