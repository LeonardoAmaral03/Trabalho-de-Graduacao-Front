import { TestBed } from '@angular/core/testing';

import { ApiComputerService } from './api-computer.service';

describe('ApiComputerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiComputerService = TestBed.get(ApiComputerService);
    expect(service).toBeTruthy();
  });
});
