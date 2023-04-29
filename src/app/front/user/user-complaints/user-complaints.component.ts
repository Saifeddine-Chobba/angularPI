import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';

@Component({
  selector: 'app-user-complaints',
  templateUrl: './user-complaints.component.html',
  styleUrls: ['./user-complaints.component.css']
})
export class UserComplaintsComponent implements OnInit {

  constructor ( private dataService : DataService) { }
  complaints : any;

  ngOnInit(): void {
    this.getMyComplaints()
  }
  // Retrieve All complaints (ki tzid user / badel el fel api ab3th user)
  //  getMyComplaints(userID) =>
  getMyComplaints() {
    this.dataService.getAllComplaints().subscribe((data) => {
      this.complaints = data;
      console.log(data);

    });
  }


}
