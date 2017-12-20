import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {LOCATION_SAVE, LOCATION_CANCEL, LOCATION_SAVE_SUCCESS, LOCATION_SAVE_ERR, 
  CityAppState, LOCATION_CANCEL_OK, LOCATION_GET, LOCATION_GET_OK, LocationAppState } from '../shared/sharedObjects';
import { APPLICATION_HOST } from '../../applicationSetup';
import 'rxjs/Rx';
 
  @Injectable()
  export class LocationEffects {

    headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
  
    constructor(
      private http: Http,
      private actions$: Actions<LocationAppState>
    ) { }
    
    @Effect() citySave$ = this.actions$    
    .ofType(LOCATION_SAVE)   
    .map(action => {    
      console.log(action.payload)
      return JSON.stringify(action.payload);
    })
    .switchMap(payload =>       
      this.http.post('http://localhost:3001/location/create', payload, this.options) 
     
    )
    .map(res => ({ type: LOCATION_SAVE_SUCCESS, data: res.json(), status : 2 }))
    .catch(() => Observable.of({ type: LOCATION_SAVE_ERR }));
       

    @Effect() cityReset$ = this.actions$    
    .ofType(LOCATION_CANCEL)    
    .map(action => 
      {
        return ({ type: LOCATION_CANCEL_OK});
      });       

      @Effect() cityGet$ = this.actions$     
      .ofType(LOCATION_GET)    
      .map(action => {        
        JSON.stringify(action);
      })
      .switchMap(payload => this.http.get('http://localhost:3001' + '/city')  
      .map(res =>{       
        return { type: LOCATION_GET_OK, payload: res.json()};
      }) 
      .catch(() => Observable.of({ type: LOCATION_SAVE_ERR }))
    ); 
    
  }
  
  