import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cart} from "../models/cart";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/cart/client';

  constructor(private http: HttpClient) { }

  getCart(id: number): Observable<Cart> {
    const url = `${this.baseUrl}?id=${id}`;
    return this.http.get<Cart>(url);
  }

  deleteProductFromCart(idProd: number, idUser: number): Observable<void> {
    const url = `${this.baseUrl}/products?idprod=${idProd}&iduser=${idUser}`;
    return this.http.delete<void>(url);
  }

  addProductToCart(idProd: number, quant: number, idUser: number): Observable<string> {
    const url = `${this.baseUrl}/products?idprod=${idProd}&quant=${quant}&iduser=${idUser}`;
    return this.http.put<string>(url, null);
  }

  updateAmount(id: number, quantity: number, idUser: number): Observable<void> {
    const url = `${this.baseUrl}/products/updateamount?idprod=${id}&quantity=${quantity}&iduser=${idUser}`;
    return this.http.put<void>(url, null);
  }
}
