import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FooterFrontComponent} from "./front/common-component/footer/footer.component";
import {OwnerNavbarComponent} from "./front/camping-center-owner/navbar/navbar.component";
import {ReviewComponent} from "./front/camping-center-owner/review/review.component";
import {OwnerProfileComponent} from "./front/camping-center-owner/profile/profile.component";
import { AboutComponent } from './front/common-component/about/about.component';
import { OwnerAboutComponent } from './front/camping-center-owner/owner-about/owner-about.component';
import { OwnerMyAccountComponent } from './front/camping-center-owner/owner-my-account/owner-my-account.component';
import { OwnerBookingsComponent } from './front/camping-center-owner/owner-bookings/owner-bookings.component';
import { OwnerActivitiesComponent } from './front/camping-center-owner/owner-activities/owner-activities.component';
import { OwnerComplaintComponent } from './front/camping-center-owner/owner-complaint/owner-complaint.component';
import { OwnerStatsComponent } from './front/camping-center-owner/owner-stats/owner-stats.component';
import { CarouselComponent } from './front/common-component/carousel/carousel.component';
import { OwnerFileComplaintComponent } from './front/camping-center-owner/owner-file-complaint/owner-file-complaint.component';
import { TermsComponent } from './front/common-component/terms/terms.component';
import { OwnerTermsComponent } from './front/camping-center-owner/owner-terms/owner-terms.component';
import { ComplaintBodyComponent } from './front/common-component/complaint-body/complaint-body.component';
import { GuestHomeComponent } from './front/guest/guest-home/guest-home.component';
import { GuestNavbarComponent } from './front/guest/guest-navbar/guest-navbar.component';
import { GuestAboutComponent } from './front/guest/guest-about/guest-about.component';
import { GuestTermsComponent } from './front/guest/guest-terms/guest-terms.component';
import { GuestSignupComponent } from './front/guest/guest-signup/guest-signup.component';
import { GuestShopComponent } from './front/guest/guest-shop/guest-shop.component';
import { GuestActivitiesComponent } from './front/guest/guest-activities/guest-activities.component';
import { GuestCampgroundsComponent } from './front/guest/guest-campgrounds/guest-campgrounds.component';
import { UserAccountComponent } from './front/user/user-account/user-account.component';
import { UserNavbarComponent } from './front/user/user-navbar/user-navbar.component';
import { UserAboutComponent } from './front/user/user-about/user-about.component';
import { UserTermsComponent } from './front/user/user-terms/user-terms.component';
import { UserComplaintsComponent } from './front/user/user-complaints/user-complaints.component';
import { UserFileComplaintComponent } from './front/user/user-file-complaint/user-file-complaint.component';
import { UserShopComponent } from './front/user/user-shop/user-shop.component';
import { UserHomeComponent } from './front/user/user-home/user-home.component';
import { UserCampgroundsComponent } from './front/user/user-campgrounds/user-campgrounds.component';
import { UserActivitiesComponent } from './front/user/user-activities/user-activities.component';
import { UserBookingsComponent } from './front/user/user-bookings/user-bookings.component';
import { UserOrdersComponent } from './front/user/user-orders/user-orders.component';
import { UserActivityProfileComponent } from './front/user/user-activity-profile/user-activity-profile.component';
import { UserOrderProfileComponent } from './front/user/user-order-profile/user-order-profile.component';
import { UserCampgroundProfileComponent } from './front/user/user-campground-profile/user-campground-profile.component';
import { UserReservationProfileComponent } from './front/user/user-reservation-profile/user-reservation-profile.component';
import { UserProductProfileComponent } from './front/user/user-product-profile/user-product-profile.component';
import { UserComplaintProfileComponent } from './front/user/user-complaint-profile/user-complaint-profile.component';
import { OwnerActivityProfileComponent } from './front/camping-center-owner/owner-activity-profile/owner-activity-profile.component';
import { OwnerComplaintProfileComponent } from './front/camping-center-owner/owner-complaint-profile/owner-complaint-profile.component';
import { AccountComponent } from './front/common-component/account/account.component';
import {ChangeImageDirective} from "./change-image.directive";
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { MapComponent } from './front/common-component/map/map.component';
import { ModalComponent } from './front/common-component/modal/modal.component';
import { DashboardComponent } from './back/admin/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { ForumComponent } from './front/forum/forum.component';
import { ForumHeaderComponent } from './front/forum/forum-header/forum-header.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    ChangeImageDirective,
    AppComponent,
    FooterFrontComponent,
    OwnerNavbarComponent,
    ReviewComponent,
    OwnerProfileComponent,
    AboutComponent,
    OwnerAboutComponent,
    OwnerMyAccountComponent,
    OwnerBookingsComponent,
    OwnerActivitiesComponent,
    OwnerComplaintComponent,
    OwnerStatsComponent,
    CarouselComponent,
    OwnerFileComplaintComponent,
    TermsComponent,
    OwnerTermsComponent,
    ComplaintBodyComponent,
    GuestHomeComponent,
    GuestNavbarComponent,
    GuestAboutComponent,
    GuestTermsComponent,
    GuestSignupComponent,
    GuestShopComponent,
    GuestActivitiesComponent,
    GuestCampgroundsComponent,
    UserAccountComponent,
    UserNavbarComponent,
    UserAboutComponent,
    UserTermsComponent,
    UserComplaintsComponent,
    UserFileComplaintComponent,
    UserShopComponent,
    UserHomeComponent,
    UserCampgroundsComponent,
    UserActivitiesComponent,
    UserBookingsComponent,
    UserOrdersComponent,
    UserActivityProfileComponent,
    UserOrderProfileComponent,
    UserCampgroundProfileComponent,
    UserReservationProfileComponent,
    UserProductProfileComponent,
    UserComplaintProfileComponent,
    OwnerActivityProfileComponent,
    OwnerComplaintProfileComponent,
    AccountComponent,
    MapComponent,
    ModalComponent,
    DashboardComponent,
    LoginComponent,
    ForumComponent,
    ForumHeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GalleriaModule,
        RatingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
