import { TestBed } from '@angular/core/testing';

import { ApiItemService } from './api-item.service';

describe('ApiItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiItemService = TestBed.get(ApiItemService);
    expect(service).toBeTruthy();
  });
});
