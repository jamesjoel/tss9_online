import { TestBed } from '@angular/core/testing';

import { VariantsService } from './variants.service';

describe('VariantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariantsService = TestBed.get(VariantsService);
    expect(service).toBeTruthy();
  });
});
