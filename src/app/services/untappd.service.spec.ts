import { TestBed } from '@angular/core/testing';

import { UntappdService } from './untappd.service';

describe('UntappdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UntappdService = TestBed.get(UntappdService);
    expect(service).toBeTruthy();
  });
});
