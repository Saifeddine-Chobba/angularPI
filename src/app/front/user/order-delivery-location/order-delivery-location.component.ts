import {AfterViewInit, Component} from '@angular/core';
import {MapService} from "../../../services/map.service";
import * as tt from "@tomtom-international/web-sdk-maps";

@Component({
  selector: 'app-order-delivery-location',
  templateUrl: './order-delivery-location.component.html',
  styleUrls: ['./order-delivery-location.component.scss']
})
export class OrderDeliveryLocationComponent implements AfterViewInit{
  longitude:number ;
  latitude:number ;

  map : tt.Map;
  constructor(private mapService:MapService) {
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
    
  }


}
