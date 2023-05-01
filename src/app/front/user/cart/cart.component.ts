import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {ShopDataService} from "../../../services/shop-data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  idUser :  number ;
  products : Product[] = [] ;
  amounts : number[] = [];
  totals : number[] = [];
  cart : Cart;
  total:number = 0;

  constructor(private cartService:CartService ,
              private userService: UserService ,
              private router:Router,
              private shopDataService:ShopDataService) {
  }
  ngOnInit(): void {
    this.initCart();
  }

   initCart() {
    this.idUser = this.userService.getCurrentUserId();
     this.getCart(this.idUser);
  }

  getCart(idUser: number) {
    this.cartService.getCart(idUser).subscribe(
      (response: Cart) => {
        this.cart = response;
        this.getProducts(this.cart);
        this.getAmounts(this.cart);
        this.totals = this.calculateTotals(this.products, this.amounts);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProducts(cart : Cart){
    if (cart == null){
      console.log("cart/user does not exist")
    }
    else{
      this.products = cart.products;
    }
  }

  getAmounts(cart : Cart){
    if(cart.amounts){
      this.amounts = cart.amounts;
    }
  }

  incrementQuantity(product:Product , i : number) {
    //update quant input
    const inputTag = document.getElementById('inputQuant'+i) as HTMLInputElement;
    const value = parseInt(inputTag.value, 10);
    const newQuant = value + 1;
    inputTag.value = ( newQuant).toString();
    //update totals
    const totalDiv = document.getElementById('total'+i) as HTMLDivElement;
    const newTotal = newQuant * (product.price-(product.price*product.discountPercent/100));
    this.totals[i] = newTotal;
    this.updateTotal();
    totalDiv.innerText = newTotal.toString();
    //push changes to backend
    this.updateProductAmount(product.idProduct,newQuant,this.idUser);
  }

  decrementQuantity(product:Product, i :number) {
    //update quant input
    const inputTag = document.getElementById('inputQuant'+i) as HTMLInputElement;
    const value = parseInt(inputTag.value, 10);
    const newQuant = value - 1;
    inputTag.value = ( newQuant).toString();
    //update totals
    const totalDiv = document.getElementById('total'+i) as HTMLDivElement;
    const newTotal = newQuant * (product.price-(product.price*product.discountPercent/100));
    this.totals[i] = newTotal;
    this.updateTotal();
    totalDiv.innerText = newTotal.toString();
    //push changes to backend
    this.updateProductAmount(product.idProduct,newQuant,this.idUser);
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

   removeProductFromCart(idProd: number , i:number): void {
    this.cartService.deleteProductFromCart(idProd, this.idUser).subscribe(
      () => {
        console.log(`Product with ID ${idProd} was successfully removed from the cart of user ${this.idUser}.`);
        this.products.splice(i,1);
        const container = document.getElementById("container-prods") as HTMLDivElement;
        const productDiv = document.getElementById("prod"+i) as HTMLDivElement;
        if (this.products.length == 0){
          container.innerHTML = "";
        }
        else {
         productDiv.innerHTML = "";
        }
      },
      (error) => {
        console.error(`An error occurred while removing product with ID ${idProd} from the cart of user ${this.idUser}: ${error}`);
      }
    );
  }

  updateTotal(){
    this.total = 0 ;
    for (let i = 0; i < this.products.length; i++){
      this.total = this.total + this.totals[i];
    }
    const total = document.getElementById("totalAll") as HTMLDivElement;
    total.innerText = this.total.toString();
  }
  updateProductAmount(id: number, quantity: number, idUser: number) {
    this.cartService.updateAmount(id, quantity, idUser).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
createOrder(){
    this.shopDataService.total = this.total;
    this.router.navigate(["/user/order/details" ]);
}




}
