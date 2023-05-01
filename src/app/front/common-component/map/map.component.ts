import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import {Observable, Subscriber} from "rxjs";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
  public key : string = "AzhrmszmMRVqjdEvr043KGbFiuK4n285";
  public map: tt.Map;

  constructor() {
  }
  public ngAfterViewInit(): void {
    this.loadMap()
    console.log("map component")
  }

  public getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  public loadMap(): void {
    this.map = tt.map({
      key: this.key,
      container: 'map',
    });

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.jumpTo({
          center: {
            lat: position.latitude,
            lng: position.longitude,
          },
          zoom: 13,
        });

        const popup = new tt.Popup({ anchor: 'bottom', offset: { bottom: [0, -40] } }).setHTML('Angular TomTom');

        var marker = new tt.Marker().setLngLat({
          lat: 37.7749,
          lng: -122.4194,
        }).addTo(this.map);
        marker.setPopup(popup).togglePopup();
      });
  }


}
