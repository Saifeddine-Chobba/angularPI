import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/models/complaint';
import { DataService } from 'src/app/services/Data.service';

@Component({
  selector: 'app-user-file-complaint',
  templateUrl: './user-file-complaint.component.html',
  styleUrls: ['./user-file-complaint.component.css']
})
export class UserFileComplaintComponent implements OnInit {

  constructor(private dataService: DataService) { }
  typeComplaint: string;
  data: any;
  username : string ;
  description : string  ='' ;

  ngOnInit(): void {

  }

  addComplaint() {
    const complaint : Complaint = { typeComplaint : this.typeComplaint, description: this.description , username : ''};
    this.dataService.addComplaint(complaint).subscribe((result) => {
      console.log('Complaint added successfully', result);
    });
  }




}
