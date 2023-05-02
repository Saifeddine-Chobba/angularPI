import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products:Product[] = [];
  constructor(private productService:ProductService,
              private router:Router) {
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products) => {
        console.log('Products retrieved successfully:', products);
        this.products = products;
      },
      (error) => {
        console.error('Error retrieving products:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getProducts();
  }

  goToAddPage(){
    this.router.navigate(["/dashboard/products/add"])
  }
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        console.log(`Product with ID ${id} deleted successfully`);
        // Update the list of products, if necessary
      },
      (error) => {
        console.error(`Error deleting product with ID ${id}:`, error);
      }
    );
  }

  viewProduct(id:number){

  }
}
