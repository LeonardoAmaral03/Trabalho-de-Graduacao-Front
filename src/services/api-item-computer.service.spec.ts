import { TestBed } from '@angular/core/testing';

import { ApiItemComputerService } from './api-item-computer.service';

describe('ApiItemComputerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiItemComputerService = TestBed.get(ApiItemComputerService);
    expect(service).toBeTruthy();
  });
});
