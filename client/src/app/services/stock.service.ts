import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Stock from 'src/app/models/stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  apiUrl = `${environment.host}/stocks`;
  constructor(private http: HttpClient) {}
  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }
}
