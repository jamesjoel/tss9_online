import { TestBed, async, inject } from '@angular/core/testing';

import { BackdorGuard } from './backdor.guard';

describe('BackdorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackdorGuard]
    });
  });

  it('should ...', inject([BackdorGuard], (guard: BackdorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
