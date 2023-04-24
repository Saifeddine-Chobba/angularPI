import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeImage]'
})
export class ChangeImageDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const sliderMainImage = document.getElementById("prod-profile-design-main-image") as HTMLImageElement;
    const sliderImageList = this.el.nativeElement.getElementsByClassName("profile-img-list");

    for (let i = 0; i < sliderImageList.length; i++) {
      const image = sliderImageList[i] as HTMLImageElement;
      if (image) {
        image.onclick = function(){
          if (sliderMainImage) {
            sliderMainImage.src = image.src;
            console.log(sliderMainImage.src);
          }
        };
      }
    }
  }
}
