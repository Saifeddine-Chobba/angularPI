import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-signup',
  templateUrl: './guest-signup.component.html',
  styleUrls: ['./guest-signup.component.css']
})
export class GuestSignupComponent implements OnInit {

  script : HTMLScriptElement;
  constructor() {
    this.script = document.createElement(("script"));
    this.script.src = "/src/assets/back/plugins/global/plugins.bundle.js";
    document.body.appendChild(this.script);
    this.script.src = "/src/assets/back/js/scripts.bundle.js";
    document.body.appendChild(this.script);
    this.script.src = "/src/assets/back/js/custom/authentication/sign-up/general.js";
    document.body.appendChild(this.script);

  }

  ngOnInit(): void {
  }

}
