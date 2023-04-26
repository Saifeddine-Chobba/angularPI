import {Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import {MapComponent} from "../../common-component/map/map.component";

@Component({
  selector: 'app-user-campground-profile',
  templateUrl: './user-campground-profile.component.html',
  styleUrls: [    './user-campground-profile.component.css' ]
})
export class UserCampgroundProfileComponent implements OnInit {

  selectedRating: number;
  @ViewChild(MapComponent) map !: MapComponent;
  visibleBooking : boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.selectedRating = 0;
  }

  ngOnInit(): void {
    const activeImageCampProf = this.el.nativeElement.querySelector(".product-image .active");
    const productImagesCampProf = this.el.nativeElement.querySelectorAll(".image-list img");

    const changeImage = (e: MouseEvent): any => {
      activeImageCampProf.src = (e.target as HTMLImageElement).src;
    };

    productImagesCampProf.forEach((image: HTMLImageElement) => image.addEventListener('click', changeImage));
  }

  public onRate(event: any) : void {
    this.selectedRating = event.value;
    console.log("Selected rating: " + this.selectedRating);
  }

  showMap() {
    this.map.visible = true;
  }

  showBooking() {
    this.visibleBooking = true;
  }


}
