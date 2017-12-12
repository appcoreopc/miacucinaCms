import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {CITY_SAVE, CITY_CANCEL} from './cityReducer';

import 'rxjs/Rx';

@Injectable()
export class CityEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

 @Effect() citySave$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType(CITY_SAVE)
      // Map the payload into JSON to use as the request body
      .map(action => 
        {
            //JSON.stringify(action.payload);
            console.log('city save effects at work.');
            return ({ type: CITY_SAVE});
        });   
        
@Effect() cityReset$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(CITY_CANCEL)
        // Map the payload into JSON to use as the request body
        .map(action => 
          {
              //JSON.stringify(action.payload);
              console.log('city cancel effects at work.');
              return ({ type: CITY_CANCEL});
          });   
          
          
}


