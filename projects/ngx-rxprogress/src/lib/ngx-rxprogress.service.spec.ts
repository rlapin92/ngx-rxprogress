import { TestBed, inject } from '@angular/core/testing';
import {ProgressRegistryService} from './service/progress-registry.service';


describe('NgxRxprogressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressRegistryService]
    });
  });

  it('should be created', inject([ProgressRegistryService], (service: ProgressRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
