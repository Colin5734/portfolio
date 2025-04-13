import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AareguruService {
  private apiUrl =
    'https://aareguru.existenz.ch/v2018/today?app=my.app.ch&version=1.0.42';

  constructor(private http: HttpClient) {}

  getCurrentTemperature(): Observable<number> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response['aare']));
  }
}
