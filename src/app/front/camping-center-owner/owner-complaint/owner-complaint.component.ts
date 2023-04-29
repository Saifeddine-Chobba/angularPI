import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';

@Component({
  selector: 'app-owner-complaint',
  templateUrl: './owner-complaint.component.html',
  styleUrls: ['./owner-complaint.component.css']
})
export class OwnerComplaintComponent implements OnInit {

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
