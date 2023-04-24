import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-owner',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class OwnerNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToAccount(){
    this.router.navigate(["/owner/myaccount"])
  }

}
