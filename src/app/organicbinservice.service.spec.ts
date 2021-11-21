import { TestBed } from '@angular/core/testing';

import { OrganicbinserviceService } from './organicbinservice.service';

describe('OrganicbinserviceService', () => {
  let service: OrganicbinserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganicbinserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
