import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './tourPanel/dashboard/dashboard.component';
import { CmdNavigationComponent } from './tourPanel/cmd-navigation/cmd-navigation.component';
import { CountryComponentComponent } from './tourPanel/country-component/country-component.component';
import { CityComponentComponent } from './tourPanel/city-component/city-component.component';
import { LocationComponentComponent } from './tourPanel/location-component/location-component.component';
import { TourPlaceInfoComponentComponent } from './tourPanel/tour-place-info-component/tour-place-info-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CmdNavigationComponent,
    CountryComponentComponent,
    CityComponentComponent,
    LocationComponentComponent,
    TourPlaceInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
