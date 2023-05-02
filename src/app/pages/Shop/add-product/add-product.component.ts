import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product : Product = new Product();
  constructor(private route: ActivatedRoute,
              private productSerice:ProductService
  ) {
  }
  ngOnInit(): void {

  }

  // getProduct(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log('ID:', id);
  //   if (id)
  //   this.productSerice.getProductById(parseInt(id)).subscribe(
  //     (product: Product) => {
  //       this.product = product;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }


  onSubmit() {
    this.productSerice.createProduct(this.product)
      .subscribe(
        product => {
          console.log('Product created:', product);
          // do something with the newly created product, like redirecting to its details page
        },
        error => {
          console.error('Error creating product:', error);
          // handle the error, like showing an error message to the user
        }
      );
  }

}
