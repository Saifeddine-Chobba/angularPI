import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {MyAccountComponent} from "./ManageUsers/my-account/my-account.component";
import {AddUserComponent} from "./ManageUsers/add-user/add-user.component";
import {EditUserComponent} from "./ManageUsers/edit-user/edit-user.component";
import {AllUsersComponent} from "./ManageUsers/all-users/all-users.component";
import {TableModule} from "primeng/table";
import {ComplaintProfileComponent} from "./Activity+Complaints/complaint-profile/complaint-profile.component";
import {AllComplaintsComponent} from "./Activity+Complaints/all-complaints/all-complaints.component";
import {CampgroundProfileComponent} from "./campgrounds+reservations/campground-profile/campground-profile.component";
import {AllCampgroundsComponent} from "./campgrounds+reservations/all-campgrounds/all-campgrounds.component";
import {ActivityProfileComponent} from "./Activity+Complaints/activity-profile/activity-profile.component";
import {AllActivitiesComponent} from "./Activity+Complaints/all-activities/all-activities.component";
import {AllReservationsComponent} from "./campgrounds+reservations/all-reservations/all-reservations.component";
import {
  ReservationProfileComponent
} from "./campgrounds+reservations/reservation-profile/reservation-profile.component";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ProductsComponent} from "./Shop/products/products.component";
import {OrdersComponent} from "./Shop/orders/orders.component";
import {DepositsComponent} from "./Shop/deposits/deposits.component";
import {PersonnelComponent} from "./Shop/personnel/personnel.component";
import {SuppliersComponent} from "./Shop/suppliers/suppliers.component";
import {AddDepositComponent} from "./Shop/add-deposit/add-deposit.component";
import {ProductProfileBackComponent} from "./Shop/product-profile-back/product-profile-back.component";
import {AddProductComponent} from "./Shop/add-product/add-product.component";

@NgModule({
  declarations: [
    AppDashboardComponent,
    //user
    MyAccountComponent,
    AddUserComponent,
    EditUserComponent,
    AllUsersComponent,
    //complainthandler
    ComplaintProfileComponent,
    AllComplaintsComponent,
    //campgroundmanager
    CampgroundProfileComponent,
    AllCampgroundsComponent,
    //activity
    ActivityProfileComponent,
    AllActivitiesComponent,
    //reservation manager
    AllReservationsComponent,
    ReservationProfileComponent,
    //shopmanager
    ProductsComponent,
    OrdersComponent,
    DepositsComponent,
    PersonnelComponent,
    SuppliersComponent,
    AddDepositComponent,
    ProductProfileBackComponent,
    AddProductComponent,
    //forum manager
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
