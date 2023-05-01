import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Cart} from "../../../models/cart";
import {CartService} from "../../../services/cart.service";
import {ShopDataService} from "../../../services/shop-data.service";
import {MapComponent} from "../../common-component/map/map.component";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{

  @ViewChild(MapComponent) map !: MapComponent;
  data : ShopDataService;
  method : String;
  constructor(private cartService:CartService,
              public shopDataService:ShopDataService
  ) {
  }
  ngOnInit(): void {
    this.shopDataService.ngOnInit();
    this.data = this.shopDataService;
  }

  isToBeSupplied(id:number):boolean{
    return false;
  }

  showMap() {
    this.map.visible = true;
  }
}
