import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  constructor( private router :Router) { }

  ngOnInit(): void {
  }

  navigateToPage() {
    this.router.navigate(['/user/campgrounds']);
  }
}
