import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

 @Effect() login$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType('INCREMENT')
      // Map the payload into JSON to use as the request body
      .map(action => 
        {
            //JSON.stringify(action.payload);
            console.log('increment effects at work.');
            return ({ type: 'DECREMENT'});
        });      
}



