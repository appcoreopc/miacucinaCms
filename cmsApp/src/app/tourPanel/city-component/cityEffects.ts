import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {CITY_SAVE, CITY_CANCEL, CITY_SAVE_SUCCESS, CITY_SAVE_ERR, 
  CityAppState, CITY_CANCEL_OK, CITY_GET } from './cityReducer';

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
      //console.log(action);
      //console.log(action.description);
      console.log(action.payload)
      return JSON.stringify(action.payload);
    })
    .switchMap(payload => 
      //console.log('payload logging:');
      //console.log(payload);
      this.http.post('http://localhost:3001/city/create', payload, this.options) 
      //return Observable.of({ type: CITY_SAVE_ERR });
    )
    .map(res => ({ type: CITY_SAVE_SUCCESS, data: res.json(), status : 2 }))
    .catch(() => Observable.of({ type: CITY_SAVE_ERR }));
       

    @Effect() cityReset$ = this.actions$
    // Listen for the 'LOGIN' action
    .ofType(CITY_CANCEL)
    // Map the payload into JSON to use as the request body
    .map(action => 
      {
        return ({ type: CITY_CANCEL_OK});
      }); 
      

      @Effect() cityGet$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType(CITY_GET)
      // Map the payload into JSON to use as the request body
      .map(action => {    
        console.log(action.name);
        console.log(action.description);
        JSON.stringify(action);
      })
      .switchMap(payload => this.http.get(APPLICATION_HOST + '/city')  
      .map(res =>{
        return { type: CITY_SAVE_SUCCESS, payload: res.json()};
      })    
      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: CITY_SAVE_ERR }))
    ); 
    
  }
  
  