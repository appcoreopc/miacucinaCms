import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms'; 

import { counterReducer } from './tourPanel/dashboard/counterReducer';
import { cityReducer } from './tourPanel/city-component/cityReducer';
import { CityEffects } from './tourPanel/city-component/cityEffects';

import { CountryReducer } from './tourPanel/country-component/countryReducer';
import { CountryEffects } from './tourPanel/country-component/countryEffects';

import { AuthEffects  } from './tourPanel/dashboard/dashboardEffects';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './tourPanel/dashboard/dashboard.component';
import { CmdNavigationComponent } from './tourPanel/cmd-navigation/cmd-navigation.component';
import { CountryComponentComponent } from './tourPanel/country-component/country-component.component';
import { CityComponentComponent } from './tourPanel/city-component/city-component.component';
import { LocationComponentComponent } from './tourPanel/location-component/location-component.component';
import { TourPlaceInfoComponentComponent } from './tourPanel/tour-place-info-component/tour-place-info-component.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'location', component: LocationComponentComponent },
  { path: 'city', component: CityComponentComponent },
  { path: 'country', component: CountryComponentComponent }
];

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
    BrowserModule, HttpModule, RouterModule, NgxDatatableModule,FormsModule,
    StoreModule.forRoot([counterReducer, cityReducer, CountryReducer]), 
    EffectsModule.forRoot([AuthEffects, CityEffects, CountryEffects]), /* Start monitoring app's side effects */
    RouterModule.forRoot(ROUTES)
  ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

