import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-shop',
  templateUrl: './user-shop.component.html',
  styleUrls: ['./user-shop.component.css']
})
export class UserShopComponent implements OnInit {

  products : Product[] ;
  constructor(private router: Router , private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goToProfile(id : number){
    this.router.navigate(['/user/productprofile/', id]);
  }
}
