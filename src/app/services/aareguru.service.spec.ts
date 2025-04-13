import { TestBed } from '@angular/core/testing';

import { AareguruService } from './aareguru.service';

describe('AareguruService', () => {
  let service: AareguruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AareguruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
