import { TestBed } from '@angular/core/testing';

import { ApiMaintenanceItemService } from './api-maintenance-item.service';

describe('ApiMaintenanceItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMaintenanceItemService = TestBed.get(ApiMaintenanceItemService);
    expect(service).toBeTruthy();
  });
});
