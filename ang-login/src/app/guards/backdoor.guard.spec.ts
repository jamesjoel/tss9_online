import { TestBed, async, inject } from '@angular/core/testing';

import { BackdoorGuard } from './backdoor.guard';

describe('BackdoorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackdoorGuard]
    });
  });

  it('should ...', inject([BackdoorGuard], (guard: BackdoorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
