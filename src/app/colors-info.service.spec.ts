import { TestBed } from '@angular/core/testing';

import { ColorsInfoService } from './colors-info.service';

describe('ColorsInfoService', () => {
  let service: ColorsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
