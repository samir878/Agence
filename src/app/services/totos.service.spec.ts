import { TestBed } from '@angular/core/testing';

import { TotosService } from './totos.service';

describe('TotosService', () => {
  let service: TotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
