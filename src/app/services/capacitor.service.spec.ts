import { TestBed } from '@angular/core/testing';

import { CapacitorService } from './capacitor.service';

describe('CapacitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacitorService = TestBed.get(CapacitorService);
    expect(service).toBeTruthy();
  });
});
