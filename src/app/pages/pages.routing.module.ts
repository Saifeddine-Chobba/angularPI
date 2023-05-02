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
import {OrdersComponent} from "./Shop/orders/orders.component";
import {Product} from "../models/product";
import {ProductsComponent} from "./Shop/products/products.component";
import {DepositsComponent} from "./Shop/deposits/deposits.component";
import {PersonnelComponent} from "./Shop/personnel/personnel.component";
import {SuppliersComponent} from "./Shop/suppliers/suppliers.component";
import {AddDepositComponent} from "./Shop/add-deposit/add-deposit.component";
import {ProductProfileBackComponent} from "./Shop/product-profile-back/product-profile-back.component";
import {AddProductComponent} from "./Shop/add-product/add-product.component";

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
  {path: 'orders', component:OrdersComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'deposits' , component:DepositsComponent},
  {path: 'personnel' , component:PersonnelComponent},
  {path: 'suppliers',component:SuppliersComponent},
  {path: 'roles',component:AllRolesComponent},
  //end navigation sidebar
  {path: 'addUser' , component: AddUserComponent},
  {path: 'editUser' , component: EditUserComponent},
  {path: 'addrole',component:AddRoleComponent},
  //other routes
  {path: 'deposits/add',component:AddDepositComponent},
  // {path: 'products/:id',component:ProductProfileBackComponent},
  {path: 'products/add' , component: AddProductComponent}
];
