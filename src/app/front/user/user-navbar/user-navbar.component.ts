import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import { AuthService } from 'src/app/pages/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
  private authService:AuthService,
  private router:Router) { }

  ngOnInit(): void {

    //lazy load
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = "./../../../front.css";
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${"./../../../front.css"}`;


      head.appendChild(style);
    }
  }

  logOut(){
this.authService.logOut();

  }
}
