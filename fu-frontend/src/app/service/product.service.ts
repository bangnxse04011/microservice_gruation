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
  findProductData() {
    return this.http.get<any[]>(`${this.API_URL}/phone/`).pipe(map(data => data));
  }

  /**
  * Find list product data.
  */
  findProductById(id: any) {
    return this.http.get<any>(`${this.API_URL}/product/${id}/phone`).pipe(map(data => data));
  }
}
