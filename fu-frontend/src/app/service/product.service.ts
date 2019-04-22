import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Cache-Control', 'no-cache');

let options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // API link
  private API_URL = environment.SERVICE;

  constructor(private http: HttpClient) { }

  /**
   * Find list product data.
   */
  find_Product_Data() {
    return this.http.get<any[]>(`${this.API_URL}/laptop/`).pipe(map(data => data));
  }
}
