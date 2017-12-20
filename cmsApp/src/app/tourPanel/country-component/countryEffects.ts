import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {COUNTRY_CANCEL, COUNTRY_SAVE_SUCCESS, CITY_SAVE_ERR, 
  CityAppState, COUNTRY_CANCEL_OK, COUNTRY_SAVE, COUNTRY_GET, COUNTRY_GET_OK } from '../shared/sharedObjects';

import { APPLICATION_HOST } from '../../applicationSetup';
import 'rxjs/Rx';
 

  @Injectable()
  export class CountryEffects {

    headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
  
    constructor(
      private http: Http,
      private actions$: Actions<CityAppState>
    ) { }
    
    @Effect() citySave$ = this.actions$    
    .ofType(COUNTRY_SAVE)   
    .map(action => {    
      console.log(action.payload)
      return JSON.stringify(action.payload);
    })
    .switchMap(payload =>    
      this.http.post('http://localhost:3001/country/create', payload, this.options)     
    )
    .map(res => ({ type: COUNTRY_SAVE_SUCCESS, data: res.json(), status : 2 }))
    .catch(() => Observable.of({ type: CITY_SAVE_ERR }));
      

    @Effect() cityReset$ = this.actions$  
    .ofType(COUNTRY_CANCEL)   
    .map(action => 
      {
        return ({ type: COUNTRY_CANCEL_OK});
      }); 
      

      @Effect() cityGet$ = this.actions$      
      .ofType(COUNTRY_GET)      
      .map(action => {          
        JSON.stringify(action);
      })
      .switchMap(payload => this.http.get('http://localhost:3001' + '/country')  
      .map(res =>{       
        return { type: COUNTRY_GET_OK, payload: res.json()};
      }) 
      .catch(() => Observable.of({ type: CITY_SAVE_ERR }))
    ); 
    
  }
  
  