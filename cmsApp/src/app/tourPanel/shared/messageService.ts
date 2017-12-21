
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable() 
export class MessageService {   
    private _navItemSource = new BehaviorSubject<any>(0);    
    navItem$ = this._navItemSource.asObservable();
    
    constructor() {                
    }
    
    tryGetState(store : any)
    {
        try {
               
            for (var property in store)
            {
                var messageValue = store[property];
                if (messageValue)
                {                  
                    this._navItemSource.next(messageValue);
                    return messageValue;                    
                }     
            }    
        }
        catch (e)
        {
            console.log(e);
        }
    }    
}   
