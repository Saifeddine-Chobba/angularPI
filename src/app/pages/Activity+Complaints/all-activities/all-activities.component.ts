import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { DataService } from 'src/app/services/Data.service';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.scss'],
})
export class AllActivitiesComponent {
  constructor(private dataService: DataService) {}
  allActivities: any;
  products = [1, 2, 3];
  description : string ='' ;
  nameActivity : string ='';
  ratingActivity : string ='';
  typeActivity : string ='';
  ngOnInit(): any {
    this.getAllActivities();
  }

  getAllActivities() {
    this.dataService.getAllActivities().subscribe((data) => {
      this.allActivities = data;
    });
  }

  addActivity() {
    const activity : Activity  = { nameActivity: this.nameActivity, typeActivity : this.typeActivity, description: this.description , ratingActivity : this.ratingActivity};
  this.dataService.addActivity(activity).subscribe((result) => {
    console.log('Activity added successfully !!',result);

  })
  }

  removeActivity(id : string) {
    this.dataService.deleteActivity(id).subscribe((result)=> {
      console.log('Activity deleted successfully !',result)
    })

  }

  // updateActivity(id : string , activity : Activity) {
  //   this.dataService.updateActivity(id , activity).subscribe((result)=>
  //   {
  //     console.log('Activity updated successfully !', result)
  //   })
  // }
}
