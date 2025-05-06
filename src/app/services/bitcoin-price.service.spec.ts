import { TestBed } from '@angular/core/testing';

import { BitcoinPriceService } from './bitcoin-price.service';

describe('BitcoinPriceService', () => {
  let service: BitcoinPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
