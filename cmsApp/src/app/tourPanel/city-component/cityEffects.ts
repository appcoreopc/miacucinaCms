import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {CITY_SAVE, CITY_CANCEL, CITY_SAVE_SUCCESS, CITY_SAVE_ERR, 
  CityAppState, CITY_CANCEL_OK, CITY_GET, CITY_GET_OK } from '../shared/sharedObjects';

import { APPLICATION_HOST } from '../../applicationSetup';
import 'rxjs/Rx';
 
  @Injectable()
  export class CityEffects {

    headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
  
    constructor(
      private http: Http,
      private actions$: Actions<CityAppState>
    ) { }
    
    @Effect() citySave$ = this.actions$    
    .ofType(CITY_SAVE)   
    .map(action => {    
      console.log(action.payload)
      return JSON.stringify(action.payload);
    })
    .switchMap(payload =>      
      this.http.post('http://localhost:3001/city/create', payload, this.options)      
    )
    .map(res => ({ type: CITY_SAVE_SUCCESS, data: res.json(), status : 2 }))
    .catch(() => Observable.of({ type: CITY_SAVE_ERR }));
       

    @Effect() cityReset$ = this.actions$  
    .ofType(CITY_CANCEL)  
    .map(action => 
      {
        return ({ type: CITY_CANCEL_OK});
      }); 
      

      @Effect() cityGet$ = this.actions$    
      .ofType(CITY_GET)     
      .map(action => {   
        JSON.stringify(action);
      })
      .switchMap(payload => this.http.get('http://localhost:3001' + '/city')  
      .map(res => {       
        return { type: CITY_GET_OK, data: res.json()};
      }) 
      .catch(() => Observable.of({ type: CITY_SAVE_ERR }))
    ); 
    
  }
  
  