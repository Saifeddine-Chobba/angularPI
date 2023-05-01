import {Injectable, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Cart} from "../models/cart";
import {CartService} from "./cart.service";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ShopDataService implements OnInit{

  public idUser : number ;
  public total : number = 0;
  public cart : Cart = new Cart();
  public products : Product[] = [];
  public amounts : number[] = [];

  public totals : number[] = [];
  constructor(private userService : UserService,
              private cartService: CartService,
              ){

  }

  ngOnInit() {
    this.idUser = this.userService.getCurrentUserId();
    this.getCart(this.idUser)
  }

  getCart(idUser: number) {
    this.cartService.getCart(idUser).subscribe(
      (response: Cart) => {
        this.cart = response;
        this.products = this.cart.products;
        if (this.cart.amounts){
          this.amounts = this.cart.amounts;
        }
        this.totals = this.calculateTotals(this.products,this.amounts);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calculateTotals(products: Product[], amounts: number[]): number[] {
    const totalss: number[] = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const amount = amounts[i];
      const total = (product.price-(product.price*product.discountPercent/100)) * amount ;
      this.total = this.total+total;
      totalss.push(total);
    }
    return totalss;
  }
}
