import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Deposit} from "../models/deposit";


@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:8080/deposits';

  constructor(private http: HttpClient) {}

  getAllDeposits(): Observable<Deposit[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Deposit[]>(url);
  }

  createDeposit(name: string, ids: number[], quants: number[], longitude: number, latitude: number) {
    const payload = {
      name: name,
      ids: ids,
      quants: quants,
      longitude: longitude,
      latitude: latitude
    };
    return this.http.post<any>(`${this.apiUrl}/create`, payload);
  }

  updateDeposit(deposit: Deposit): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, deposit);
  }
  deleteDeposit(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.delete<void>(url);
  }


  getDepositById(id: number): Observable<Deposit> {
    return this.http.get<Deposit>(`${this.apiUrl}/all/deposit?id=${id}`);
  }

}
