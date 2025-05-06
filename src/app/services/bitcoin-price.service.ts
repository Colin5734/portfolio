import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinPriceService {
  private apiUrl =
    'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';

  constructor(private http: HttpClient) {}

  getCurrentBitcoinPrice() {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.USD ?? null));
  }
}
