import { Component, OnInit } from '@angular/core';
import { COUNTRY_GET, COUNTRY_GET_OK, COUNTRY_SAVE, KeyValueData, COUNTRY_CANCEL, CityAppState, COUNTRY_SAVE_SUCCESS } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from '../shared/messageService';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {
  
  status : string; 
  name : string; 
  description : string;
  
  countries : Array<KeyValueData> = new Array<KeyValueData>();
  storeSubscription : Subscription;
  
  rows = this.countries;
  
  columns = [
    { prop: 'key' },
    { name: 'description' }
  ];

  countryMessage : string[] = [COUNTRY_GET_OK, COUNTRY_SAVE_SUCCESS];
  
  constructor(private store : Store<CityAppState[]>, private messageService : MessageService) { }
  
  ngOnInit() {
    
    this.storeSubscription = this.store.subscribe(appData => 
      {    
        this.handleMessage(this.getMessage(appData));       
      });  
    }
    
    getMessage(store : any)
    {     
      try {                 
        console.log('in deepth look at store:local');
        console.log(store);  
        for (var property in store)
        {          
          var messageValue = store[property];
          if (messageValue)
          {
            if (this.countryMessage.indexOf(messageValue.type) > -1)
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
    
    
    ngDestroy() {       
      this.storeSubscription.unsubscribe();
    }
    
    ngAfterViewInit() {
      this.store.dispatch({     
        type: COUNTRY_GET });
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
          type: COUNTRY_SAVE });          
        }
        
        cancel(){
          this.store.dispatch({ type: COUNTRY_CANCEL });
        }         
        
        handleMessage(store : any)
        {
          try {
            const message = store;   
            console.log('data message'); 
            console.log(message);
            if (message)            
            {          
              console.log(message.type);
              switch (message.type) {              
                case COUNTRY_GET_OK: 
                this.status  = "Updating view.....";   
                this.countries.length = 0;                         
                var list = JSON.parse(message.data.data);
                var countries = list.countries;    
                for (var country in countries)
                {        
                  var eachCountry = countries[country];    
                  this.countries.push({
                    key : eachCountry.name,
                    description : eachCountry.description
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
      