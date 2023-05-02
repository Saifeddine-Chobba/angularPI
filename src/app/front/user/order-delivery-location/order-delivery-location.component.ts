import {AfterViewInit, Component} from '@angular/core';
import {MapService} from "../../../services/map.service";
import * as tt from "@tomtom-international/web-sdk-maps";
import {ShopDataService} from "../../../services/shop-data.service";
import {Ord} from "../../../models/order";
import {LocationService} from "../../../services/location.service";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order-delivery-location',
  templateUrl: './order-delivery-location.component.html',
  styleUrls: ['./order-delivery-location.component.scss']
})
export class OrderDeliveryLocationComponent implements AfterViewInit{
  longitude:number ;
  latitude:number ;

  map : tt.Map;
  constructor(private mapService:MapService,
              private shopService:ShopDataService,
              private locationService:LocationService,
              private orderService:OrderService) {
  }
  ngAfterViewInit(): void {
    this.map = tt.map({
      key: this.mapService.key,
      container: 'map',
    });
    this.mapService.centerMapAroundLocation(this.map);
    this.map.on('click', this.handleMapClick.bind(this));
  }

  handleMapClick(event: any) {
    const lngLat = event.lngLat;
    this.longitude = lngLat.lng;
    this.latitude = lngLat.lat;
  }

  createOrderObject(){
    this.locationService.reverseGeocode(this.longitude, this.latitude).subscribe((location) => {
      console.log(location);
      this.shopService.order.deliveryLocation = location;
      this.pushOrder(this.shopService.order);
    }, (error) => {
      console.log(error);
    });

  }

  pushOrder(order : Ord): void {
    this.orderService.createOrder(order).subscribe((order) => {
      // handle successful creation of order here
      console.log("succes push")
    }, (error) => {
      // handle error here
      console.log(error)
    });
  }



}
