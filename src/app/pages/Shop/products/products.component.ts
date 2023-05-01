import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = [];
  constructor() {
    // this.products = this.getProducts();
  }

  getProducts(){

  }

}
