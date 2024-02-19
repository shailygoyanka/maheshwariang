import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelptextComponent } from './navbar/helptext/helptext.component';
import { ListyourbusinessComponent } from './navbar/listyourbusiness/listyourbusiness.component';
import { UpComponent } from './navbar/signin/up/up.component';
import { MaheshwariComponent } from './navbar/maheshwari/maheshwari.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { GridHospitalComponent } from './home/grid-hospital/grid-hospital.component';
import { RecommendationComponent } from './home/recommendation/recommendation.component';
import { BusinessComponent } from './home/business/business.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { InnerpageComponent } from './navbar/listyourbusiness/innerpage/innerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelptextComponent,
    ListyourbusinessComponent,
    UpComponent,
    MaheshwariComponent,
    BannerComponent,
    GridHospitalComponent,
    RecommendationComponent,
    BusinessComponent,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    InnerpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
