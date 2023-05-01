import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { DataService } from 'src/app/services/Data.service';
import { GlobalVariablesService } from 'src/app/services/globalVariables.service';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.scss'],
})
export class AllActivitiesComponent {

  constructor(private dataService: DataService) {

  }
  activityID : any ;
  allActivities: any;
  activitiesLoaded : boolean = false ;
  products = [1, 2, 3];
  description : string ='' ;
  nameActivity : string ='';
  ratingActivity : number ;
  typeActivity : string ='';
  descriptionActivity : string ='';

  ngOnInit(): void {
    this.getAllActivities();
    this.dataLoaded();
  }

  getAllActivities() {
    this.dataService.getAllActivities().subscribe((data) => {
      this.allActivities = data;
    });
  }
  openModal() {
  }
  addActivity() {
    const activity : Activity  = {nameActivity: this.nameActivity, description: this.descriptionActivity , typeActivity : this.typeActivity , activityRating : this.ratingActivity};
  this.dataService.addActivity(activity).subscribe((result) => {
    console.log('Activity added successfully !!',result);

  })
  setTimeout(() => {
    window.location.reload()  }, 1000);


  }
  EditActivity() {
    const activity : Activity  = {nameActivity: this.nameActivity, description: this.descriptionActivity , typeActivity : this.typeActivity , activityRating : this.ratingActivity};
  this.dataService.updateActiviy(this.activityID,activity).subscribe((result) => {
    console.log('Activity edited successfully !!',result);
    //this.nameActivityUpdates

  })
  // setTimeout(() => {
  //   window.location.reload()  }, 1000);


  }

  removeActivity(id : string) {
    this.dataService.deleteActivity(id).subscribe((result)=> {
      console.log('Activity deleted successfully !',result)
    })
    window.location.reload()
  }

    editItem(_t11: any) {
    throw new Error('Method not implemented.');
    }

    dataLoaded () {
      setTimeout(() => {
        this.activitiesLoaded = true
      }, 500);
    }

}
