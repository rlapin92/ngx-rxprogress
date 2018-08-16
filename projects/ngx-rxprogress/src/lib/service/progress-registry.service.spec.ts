import { TestBed, inject } from '@angular/core/testing';

import { ProgressRegistryService } from './progress-registry.service';

describe('ProgressRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressRegistryService]
    });
  });

  it('should be created', inject([ProgressRegistryService], (service: ProgressRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
