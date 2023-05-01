import {Component, OnInit} from '@angular/core';

import { Router} from "@angular/router";

import {ShopDataService} from "../../../services/shop-data.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{

  data : ShopDataService;
  method : string;

  visible : boolean = false;
  constructor(public shopDataService:ShopDataService,
              private router : Router
  ) {
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
    this.router.navigate(["/user/order/deliverylocation"]);
    this.shopDataService.method = this.method;
  }


}
