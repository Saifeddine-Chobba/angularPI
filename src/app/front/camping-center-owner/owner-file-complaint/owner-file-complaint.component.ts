import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';
import { Complaint } from 'src/app/models/complaint';
import { Mail } from 'src/app/models/mail';

@Component({
  selector: 'app-owner-file-complaint',
  templateUrl: './owner-file-complaint.component.html',
  styleUrls: ['./owner-file-complaint.component.css']
})
export class OwnerFileComplaintComponent implements OnInit {

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
    this.sendComplaintemail();
  };

  sendComplaintemail () {
    const email : Mail = {recipient : "dhiaeddine.benarab@esprit.tn", msgBody : this.description , subject : 'complaint about ' +  this.typeComplaint +' service' }
    this.dataService.sendEmail(email).subscribe((result) =>
    {
      console.log('Eamil sent successfully',result);
    })
 this.description = '';
 this.typeComplaint = "";
  };


}

