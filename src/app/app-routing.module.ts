import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {CommonModule} from "@angular/common";
//front
import {OwnerProfileComponent} from "./front/camping-center-owner/profile/profile.component";
import {OwnerAboutComponent} from "./front/camping-center-owner/owner-about/owner-about.component";
import {OwnerMyAccountComponent} from "./front/camping-center-owner/owner-my-account/owner-my-account.component";
import {OwnerBookingsComponent} from "./front/camping-center-owner/owner-bookings/owner-bookings.component";
import {OwnerActivitiesComponent} from "./front/camping-center-owner/owner-activities/owner-activities.component";
import {OwnerComplaintComponent} from "./front/camping-center-owner/owner-complaint/owner-complaint.component";
import {OwnerStatsComponent} from "./front/camping-center-owner/owner-stats/owner-stats.component";
import {
  OwnerFileComplaintComponent
} from "./front/camping-center-owner/owner-file-complaint/owner-file-complaint.component";
import {OwnerTermsComponent} from "./front/camping-center-owner/owner-terms/owner-terms.component";
import {GuestHomeComponent} from "./front/guest/guest-home/guest-home.component";
import {GuestAboutComponent} from "./front/guest/guest-about/guest-about.component";
import {GuestSignupComponent} from "./front/guest/guest-signup/guest-signup.component";
import {GuestTermsComponent} from "./front/guest/guest-terms/guest-terms.component";
import {GuestShopComponent} from "./front/guest/guest-shop/guest-shop.component";
import {GuestActivitiesComponent} from "./front/guest/guest-activities/guest-activities.component";
import {GuestCampgroundsComponent} from "./front/guest/guest-campgrounds/guest-campgrounds.component";
import {UserAccountComponent} from "./front/user/user-account/user-account.component";
import {UserAboutComponent} from "./front/user/user-about/user-about.component";
import {UserTermsComponent} from "./front/user/user-terms/user-terms.component";
import {UserHomeComponent} from "./front/user/user-home/user-home.component";
import {UserActivitiesComponent} from "./front/user/user-activities/user-activities.component";
import {UserActivityProfileComponent} from "./front/user/user-activity-profile/user-activity-profile.component";
import {UserBookingsComponent} from "./front/user/user-bookings/user-bookings.component";
import {UserCampgroundProfileComponent} from "./front/user/user-campground-profile/user-campground-profile.component";
import {UserCampgroundsComponent} from "./front/user/user-campgrounds/user-campgrounds.component";
import {UserFileComplaintComponent} from "./front/user/user-file-complaint/user-file-complaint.component";
import {UserOrderProfileComponent} from "./front/user/user-order-profile/user-order-profile.component";
import {UserOrdersComponent} from "./front/user/user-orders/user-orders.component";
import {UserProductProfileComponent} from "./front/user/user-product-profile/user-product-profile.component";
import {
  UserReservationProfileComponent
} from "./front/user/user-reservation-profile/user-reservation-profile.component";
import {UserShopComponent} from "./front/user/user-shop/user-shop.component";
import {UserComplaintsComponent} from "./front/user/user-complaints/user-complaints.component";
import {CartComponent} from "./front/user/cart/cart.component";
import {OrderDetailsComponent} from "./front/user/order-details/order-details.component";



const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/guest/home',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  //camping center owner (front)
  { path: 'owner/profile', component: OwnerProfileComponent },
  { path: 'owner/about', component: OwnerAboutComponent },
  { path: 'owner/myaccount', component: OwnerMyAccountComponent},
  {path: 'owner/bookings', component: OwnerBookingsComponent},
  {path:'owner/activities' , component: OwnerActivitiesComponent},
  {path : 'owner/complaints', component: OwnerComplaintComponent},
  {path: 'owner/stats', component: OwnerStatsComponent},
  //{path: 'owner/home' , component: OwnerHomeComponent},
  {path: 'owner/filecomplaint', component: OwnerFileComplaintComponent},
  {path: 'owner/terms', component: OwnerTermsComponent},
  //guest(front)
  {path: 'guest/home' , component: GuestHomeComponent},
  {path: 'guest/about' , component: GuestAboutComponent},
  {path: 'guest/signup' , component: GuestSignupComponent},
  {path: 'guest/terms' , component: GuestTermsComponent},
  {path: 'guest/shop' , component: GuestShopComponent},
  {path: 'guest/activities' , component: GuestActivitiesComponent},
  {path: 'guest/campgrounds' , component: GuestCampgroundsComponent},
  //user(front)
  {path : 'user/myaccount' , component: UserAccountComponent},
  {path: 'user/about' , component: UserAboutComponent },
  {path: 'user/terms' , component: UserTermsComponent},
  {path : 'user/home' , component: UserHomeComponent},
  {path : 'user/activities' , component: UserActivitiesComponent},
  {path : 'user/activityprofile' , component: UserActivityProfileComponent},
  {path: 'user/bookings' , component: UserBookingsComponent},
  {path : 'user/campgroundprofile' , component: UserCampgroundProfileComponent},
  {path : 'user/campgrounds' , component: UserCampgroundsComponent},
  {path : 'user/filecomplaint' , component:UserFileComplaintComponent},
  {path : 'user/orderprofile' , component : UserOrderProfileComponent},
  {path : 'user/orders' , component: UserOrdersComponent},
  {path : 'user/product' , component: UserProductProfileComponent},
  {path : 'user/reservationprofile' , component: UserReservationProfileComponent},
  {path: 'user/shop' , component: UserShopComponent},
  {path : 'user/complaints' , component: UserComplaintsComponent},
  //added
  {path: 'user/productprofile/:id' , component: UserProductProfileComponent},
  {path:'user/cart' , component: CartComponent},
  {path: 'user/order/details' , component:OrderDetailsComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule, // Import the CommonModule here
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
