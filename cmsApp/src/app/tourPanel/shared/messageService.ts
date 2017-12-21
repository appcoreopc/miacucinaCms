
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable() 
export class MessageService {  
    
    presenceCount : number = 0;
    
    constructor(private store : Store<any>)
    {
        if (this.presenceCount == 0)
        {
            this.store.subscribe(appData => 
                {     
                    console.log('initiating subscription.');
                    this.tryGetState(appData);
                }); 
            }
                        
            this.presenceCount++;
            console.log(this.presenceCount);            
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
                
                // const message = store[1];
                // if (message)            
                // {          
                //   switch (message.data.type) {
                //     case CITY_GET_OK: 
                //     this.status  = "Updating view";                             
                //     var list = JSON.parse(message.data.data);
                //     var cities = list.cities;    
                //     for (var x in cities)
                //     {        
                //       var b = cities[x];    
                //       this.cities.push({
                //         key : b.name,
                //         description : b.description
                //       })   
                //     }                   
                //     console.log(this.cities);
                //     break;
                //   }
                // }
            }
            catch (e)
            {
                console.log(e);
            }
        }
        
    }   
    