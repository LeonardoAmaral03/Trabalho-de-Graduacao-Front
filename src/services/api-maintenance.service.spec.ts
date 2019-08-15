import { TestBed } from '@angular/core/testing';

import { ApiMaintenanceService } from './api-maintenance.service';

describe('ApiMaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMaintenanceService = TestBed.get(ApiMaintenanceService);
    expect(service).toBeTruthy();
  });
});
