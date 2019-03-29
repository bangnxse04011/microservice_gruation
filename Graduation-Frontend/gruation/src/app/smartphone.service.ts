import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { SERVICE } from '../environments/service'

const httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Cache-Control', 'no-cache');

let options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  // API link
  private API_SERVICE = SERVICE.MSB_API;

  constructor(private http: HttpClient) { }

  /**
   * Find list order data.
   */
  find_all_prouduct_smart_phone() {
    return this.http.get<any[]>(`${this.API_SERVICE}`).pipe(map(data => data));
  }
}
