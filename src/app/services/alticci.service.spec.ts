import { TestBed } from '@angular/core/testing';

import { AlticciService } from './alticci.service';

describe('AlticciServiceService', () => {
  let service: AlticciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlticciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
