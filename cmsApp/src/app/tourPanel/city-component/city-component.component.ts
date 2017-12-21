import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CITY_CANCEL,  KeyValueData,  CITY_SAVE, CityAppState, CITY_GET, CITY_SAVE_SUCCESS, CITY_GET_OK } from '../shared/sharedObjects';
import { Observable } from 'rxjs/Observable';
import { combineAll } from 'rxjs/operator/combineAll';
import { MessageService } from '../shared/messageService';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})

export class CityComponentComponent implements OnInit {
  
  status: Observable<number>;
  name : string = ""; 
  description : string = "";
  cities : Array<KeyValueData> = new Array<KeyValueData>(); 

  citySubscription : Subscription; 

  rows = this.cities;
  
  columns = [
    { prop: 'key' },
    { name: 'description' }
  ];
  
  constructor(private store : Store<CityAppState>, private messageService : MessageService) { }
  
  ngOnInit() {

    this.citySubscription = this.store.subscribe((a: any) => {
      console.log('updating city status type');
      console.log(a);
    });

    // this.store.subscribe(appData => 
    // {     
    //   this.tryGetState(appData);       
    // });    

    }

    ngOnDestroy()
    {
      console.log('removing subscription');
      this.citySubscription.unsubscribe();
    }

    ngAfterViewInit() {
      this.store.dispatch({     
        type: CITY_GET });
      }
      
      save()
      {
        this.store.dispatch({
          name : this.name, 
          description :  this.description,
          payload : {
            name : this.name, 
            description : this.description
          },
          type: CITY_SAVE });          
        }
        
        cancel(){
          this.store.dispatch({ type: CITY_CANCEL });
        }         

        tryGetState(store : any)
        {
          try {
            const message = store[1];
            if (message)            
            {          
                switch (message.data.type) {
                  case CITY_GET_OK: 
                    //this.status  = "Updating view";                             
                    var list = JSON.parse(message.data.data);
                    var cities = list.cities;    
                    for (var x in cities)
                    {        
                      var b = cities[x];    
                      this.cities.push({
                        key : b.name,
                        description : b.description
                      })   
                    }                   
                    console.log(this.cities);
                    break;
                }
            }
          }
          catch (e)
           {
             console.log(e);
           }
        }

        resetForm() {
          this.name = "";
          this.description = "";
        }        
      }
      