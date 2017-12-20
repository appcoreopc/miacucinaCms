import { Component, OnInit } from '@angular/core';
import { COUNTRY_GET, COUNTRY_SAVE, COUNTRY_CANCEL, CityAppState, COUNTRY_SAVE_SUCCESS } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {
  
  status : string; 
  name : string; 
  description : string;
  
  constructor(private store : Store<CityAppState[]>) { }
  
  ngOnInit() {
    this.store.subscribe(appData => 
      {     
        this.tryGetState(appData);       
      });     
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

    
    tryGetState(store : CityAppState[])
    {
      try {
        const message = store[1];
        if (message)
        {
          console.log(message);
          switch (message.status) {
            case 4: 
            this.status  = "Save successful.";
            this.resetForm();
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
  