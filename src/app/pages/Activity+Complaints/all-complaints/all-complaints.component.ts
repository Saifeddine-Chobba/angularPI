import { Component } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.scss']
})
export class AllComplaintsComponent {
  constructor ( private dataService : DataService) { }
  complaints : any
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
