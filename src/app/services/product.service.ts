import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Product} from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/all`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/create`, product, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, { body: product })
      .pipe(
        catchError(this.handleError)
      );
  }

  makeDiscount(product: Product, discountPercent: number): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/discount?d=${discountPercent}`, product, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError('Product not found');
    } else if (error.status === 400) {
      return throwError('Bad request');
    } else {
      return throwError('Something went wrong');
    }
  }

}
