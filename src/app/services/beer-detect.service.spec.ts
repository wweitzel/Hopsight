import { TestBed } from '@angular/core/testing';

import { BeerDetectService } from './beer-detect.service';

describe('BeerDetectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerDetectService = TestBed.get(BeerDetectService);
    expect(service).toBeTruthy();
  });
});
