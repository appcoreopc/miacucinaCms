
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable() 
export class MessageService {   

    private _navItemSource = new BehaviorSubject<any>(0);    

    navItem$ = this._navItemSource.asObservable();

    constructor(private store : Store<any>)
    {                
        this.store.subscribe(appData => 
        {     
                    console.log('initiating subscription.');
                    this.tryGetState(appData);
        }); 
    }
        
    tryGetState(store : any)
    {
            try {
                console.log(store);                
                for (var property in store)
                {
                    var messageValue = store[property];
                    if (messageValue)
                    {
                        console.log(messageValue);
                        break;                    
                    }     
                }       
              
            }
            catch (e)
            {
                console.log(e);
            }
        }
        
    }   
    