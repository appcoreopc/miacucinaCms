import { Component, OnInit } from '@angular/core';
import { COUNTRY_GET, COUNTRY_GET_OK, COUNTRY_SAVE, KeyValueData, COUNTRY_CANCEL, CityAppState, COUNTRY_SAVE_SUCCESS } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from '../shared/messageService';

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
  
  rows = this.countries;

  columns = [
    { prop: 'key' },
    { name: 'description' }
  ];

  constructor(private store : Store<CityAppState[]>, private messageService : MessageService) { }
  
  ngOnInit() {

    // this.store.subscribe(appData => 
    //   {     
    //     this.tryGetState(appData);       
    //   });     
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
    
    tryGetState(store : any)
    {
      try {
        console.log(store);
        const message = store[2];
        console.log('event sub');
        console.log(message);
        if (message)            
        {          
            console.log(message);
            switch (message.data.type) {
              case COUNTRY_GET_OK: 
                this.status  = "Updating view";                             
                var list = JSON.parse(message.data.data);
                var cities = list.countries;    
                for (var x in cities)
                {        
                  var b = cities[x];    
                  this.countries.push({
                    key : b.name,
                    description : b.description
                  })   
                }                   
                console.log(this.countries);
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
  