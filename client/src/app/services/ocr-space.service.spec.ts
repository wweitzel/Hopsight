import { TestBed } from '@angular/core/testing';

import { OcrSpaceService } from './ocr-space.service';

describe('OcrSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcrSpaceService = TestBed.get(OcrSpaceService);
    expect(service).toBeTruthy();
  });
});
