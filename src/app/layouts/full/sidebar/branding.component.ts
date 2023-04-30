import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/dashboard">
        <img
          src="./assets/images/logos/campside-logo.png"
          class="align-middle m-2"
          alt="logo"
          style="height: 80px ; width:150px"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
