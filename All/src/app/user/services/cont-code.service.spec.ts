import { TestBed } from '@angular/core/testing';

import { ContCodeService } from './cont-code.service';

describe('ContCodeService', () => {
  let service: ContCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
