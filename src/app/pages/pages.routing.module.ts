import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {AllUsersComponent} from "./ManageUsers/all-users/all-users.component";
import {AddUserComponent} from "./ManageUsers/add-user/add-user.component";
import {EditUserComponent} from "./ManageUsers/edit-user/edit-user.component";
import {MyAccountComponent} from "./ManageUsers/my-account/my-account.component";
import {AllCampgroundsComponent} from "./campgrounds+reservations/all-campgrounds/all-campgrounds.component";
import {AllReservationsComponent} from "./campgrounds+reservations/all-reservations/all-reservations.component";
import {AllActivitiesComponent} from "./Activity+Complaints/all-activities/all-activities.component";
import {AllComplaintsComponent} from "./Activity+Complaints/all-complaints/all-complaints.component";
import {SentimentAnalysisComponent} from "./Activity+Complaints/sentiment-analysis/sentiment-analysis.component";
import {AllRolesComponent} from "./ManageUsers/all-roles/all-roles.component";
import {AddRoleComponent} from "./ManageUsers/add-role/add-role.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  //navigation sidebar
  {path: 'users' , component : AllUsersComponent},
  {path: 'myaccount' , component: MyAccountComponent},
  {path: 'campgrounds' , component: AllCampgroundsComponent},
  {path: 'reservations' , component: AllReservationsComponent},
  {path: 'activities' , component: AllActivitiesComponent},
  {path: 'complaints' , component:AllComplaintsComponent},
  {path: 'sentiments', component:SentimentAnalysisComponent},
  {path: 'roles',component:AllRolesComponent},
  //end navigation sidebar
  {path: 'addUser' , component: AddUserComponent},
  {path: 'editUser' , component: EditUserComponent},
  {path: 'addrole',component:AddRoleComponent},
  //other routes
];
