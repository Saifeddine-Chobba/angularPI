import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";
import {CartService} from "../../../services/cart.service";
import {UserService} from "../../../services/user.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-user-product-profile',
  templateUrl: './user-product-profile.component.html',
  styleUrls: ['./user-product-profile.component.css'],
  providers: [MessageService]
})
export class UserProductProfileComponent implements OnInit {
  quantity :number = 1;
product : Product ;
id : number ;
  constructor(private route: ActivatedRoute, private productService: ProductService ,private renderer: Renderer2, private el: ElementRef,
              private cartService:CartService,
              private userService : UserService,
              private messageService: MessageService) {}
  ngOnInit() {
    //image nav
    const activeImageCampProf = this.el.nativeElement.querySelector(".product-image .active");
    const productImagesCampProf = this.el.nativeElement.querySelectorAll(".image-list img");

    const changeImage = (e: MouseEvent): any => {
      activeImageCampProf.src = (e.target as HTMLImageElement).src;

    };

    productImagesCampProf.forEach((image: HTMLImageElement) => image.addEventListener('click', changeImage));
    //init prod
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.productService.getProductById(this.id).subscribe(product => this.product = product);
    }
    else{
      console.log("id is null")
    }


  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(idProd: number, quant: number) {
    const idUser = this.userService.getCurrentUserId();
    this.cartService.addProductToCart(idProd, quant, idUser)
      .subscribe(
        response => {
          console.log("Product added to cart successfully");
          this.messageService.add({ key: 'bc' ,severity: 'success', summary: 'Success', detail: 'Product Succesfully Added To Cart' });


        },
        error => {
          console.log("Error adding product to cart:", error);
        }
      );
  }


}
