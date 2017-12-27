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
  relatedMessages : string[] = [CITY_GET_OK, CITY_SAVE_SUCCESS];
  rows = this.cities;
  
  columns = [
    { prop: 'key' },
    { name: 'description' }
  ];
  
  constructor(private store : Store<CityAppState>, private messageService : MessageService) { }
  
  ngOnInit() {   
    
    this.citySubscription = this.store.subscribe(appData => {
      //this.handleMessage(this.messageService.tryGetState(appData)) 
      this.handleMessage(this.getMessage(appData));  
    }); 
  }
  
  ngOnDestroy()
  {     
    this.citySubscription.unsubscribe();
  }
  
  ngAfterViewInit() {

    this.store.dispatch({     
      type: CITY_GET });
    }
    
    getMessage(store : any)
    {     
      try {                 
        
        for (var property in store)
        {          
          var messageValue = store[property];
          if (messageValue)
          {
            if (this.relatedMessages.indexOf(messageValue.type) > -1)
            { 
              return messageValue;
            }            
          }      
        }    
      }
      catch (e)
      {
        console.log(e);
      }
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
      
      handleMessage(store : any)
      {

        try {
          const message = store;
          if (message)            
          {      
          
            switch (message.data.type) {
              case CITY_GET_OK:   
               this.cities.length = 0;
               var list = JSON.parse(message.data.data);
               var cities = list.cities;    
               for (var city in cities)
               {        
                  var cityInfo = cities[city];    
                  this.cities.push({
                    key : cityInfo.name,
                    description : cityInfo.description
                  })   
                }  
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
    