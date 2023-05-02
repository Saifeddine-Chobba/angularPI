import {Component, LOCALE_ID, OnInit} from '@angular/core';

import {Router} from "@angular/router";

import {ShopDataService} from "../../../services/shop-data.service";
import {paymentMethod} from "../../../models/paymentMethod";
import {User} from "../../../models/user";
import {DatePipe} from "@angular/common";
import { Stripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' },
    // Other providers...
  ],
})
export class OrderDetailsComponent implements OnInit{

  data : ShopDataService;
  method : string ;
  stripe : Stripe;

  visible : boolean = false;
  constructor(public shopDataService:ShopDataService,
              private router : Router,

  ) {
    this.stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
  }
  ngOnInit(): void {
    this.shopDataService.ngOnInit();
    this.data = this.shopDataService;
  }

  isToBeSupplied(id:number):boolean{
    return false;
  }


  cancel(){
    this.router.navigate(["/user/cart"])
  }

  next(){
console.log(this.method);
    let user = new User();
    user.idUser = this.shopDataService.idUser;
    this.shopDataService.order.products = this.shopDataService.products;
    this.shopDataService.order.amountsOrdered= this.shopDataService.amounts;
    this.shopDataService.order.user = user ;



    if (this.method == "Cash"){
      this.shopDataService.order.paymentMethod = paymentMethod.Cash;
      console.log(this.shopDataService.order)
      this.router.navigate(["/user/order/deliverylocation"]);
    }
    else {
      this.shopDataService.order.paymentMethod = paymentMethod.CreditCard;

    }

  }

  async redirectToCheckout(sessionId: string) {
    const { error } = await this.stripe.redirectToCheckout({
      sessionId: sessionId
    });

    if (error) {
      console.error(error);
    }
  }


}
