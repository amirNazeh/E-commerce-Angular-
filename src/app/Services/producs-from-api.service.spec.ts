import { TestBed } from '@angular/core/testing';

import { ProducsFromApiService } from './producs-from-api.service';

describe('ProducsFromApiService', () => {
  let service: ProducsFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducsFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
