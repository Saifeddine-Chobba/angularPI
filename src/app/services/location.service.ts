import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'http://localhost:8080/location';

  constructor(private http: HttpClient) { }

  reverseGeocode(longitude: number, latitude: number): Observable<Location> {
    const url = `${this.apiUrl}/reverseGeocode?longitude=${longitude}&latitude=${latitude}`;
    return this.http.get<Location>(url);
  }
}
