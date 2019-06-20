import { TestBed } from '@angular/core/testing';

import { SideSheetService } from './side-sheet.service';

describe('SideSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideSheetService = TestBed.get(SideSheetService);
    expect(service).toBeTruthy();
  });
});
