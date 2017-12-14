import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {CITY_SAVE, CITY_CANCEL, CITY_SAVE_SUCCESS, CITY_SAVE_ERR, 
  CityAppState, CITY_CANCEL_OK } from './cityReducer';
  
import { APPLICATION_HOST } from '../../applicationSetup';
import 'rxjs/Rx';

@Injectable()
export class CityEffects {
  constructor(
    private http: Http,
    private actions$: Actions<CityAppState>
  ) { }
  
  @Effect() citySave$ = this.actions$
  // Listen for the 'LOGIN' action
  .ofType(CITY_SAVE)
  // Map the payload into JSON to use as the request body
  .map(action => {    
    console.log(action.name);
    console.log(action.description);
    JSON.stringify(action);
  })
  .switchMap(payload => this.http.post(APPLICATION_HOST + '/city/create', payload)
  
  .map(res => ({ type: CITY_SAVE_SUCCESS, payload: res.json() }))
  // If request fails, dispatch failed action
  .catch(() => Observable.of({ type: CITY_SAVE_ERR }))
);

@Effect() cityReset$ = this.actions$
// Listen for the 'LOGIN' action
.ofType(CITY_CANCEL)
// Map the payload into JSON to use as the request body
.map(action => 
  {
    //JSON.stringify(action.payload);
    console.log('city cancel effects at work.');
    return ({ type: CITY_CANCEL_OK});
  }); 

  @Effect() cityGet$ = this.actions$
  // Listen for the 'LOGIN' action
  .ofType(CITY_SAVE)
  // Map the payload into JSON to use as the request body
  .map(action => {    
    console.log(action.name);
    console.log(action.description);
    JSON.stringify(action);
  })
  .switchMap(payload => this.http.get(APPLICATION_HOST + '/city')  
  .map(res => ({ type: CITY_SAVE_SUCCESS, payload: res.json() }))
  // If request fails, dispatch failed action
  .catch(() => Observable.of({ type: CITY_SAVE_ERR }))
  ); 

}
