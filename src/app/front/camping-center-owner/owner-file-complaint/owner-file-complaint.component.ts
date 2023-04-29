import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';
import { Complaint } from 'src/app/models/complaint';

@Component({
  selector: 'app-owner-file-complaint',
  templateUrl: './owner-file-complaint.component.html',
  styleUrls: ['./owner-file-complaint.component.css']
})
export class OwnerFileComplaintComponent implements OnInit {

  constructor(private dataService: DataService) { }
  typeComplaint: string;

  data: any;
  // typeComplaint : string ;
  // username : string ;
  // description : string ;

  username : string ;
  description : string  ='' ;

  ngOnInit(): void {
    // this.getMyComplaints();
    // // this.addComplaint();

  }

  // getMyComplaints() {
  //   this.dataService.getAllComplaints().subscribe((data) => {
  //     this.data = data;
  //     console.log(data);

  //   });
  // }

  addComplaint() {
    const complaint : Complaint = { typeComplaint : this.typeComplaint, description: this.description , username : ''};
    this.dataService.addComplaint(complaint).subscribe((result) => {
      console.log('Complaint added successfully', result);
    });
  }




}

