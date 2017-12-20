import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { LocationAppState } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';
import { LOCATION_GET, CITY_GET, COUNTRY_GET } from '../shared/sharedObjects';

export class DropDownValue {
 value  : string; 
 label : string;
}

@Component({
  selector: 'app-location-component',
  templateUrl: './location-component.component.html',
  styleUrls: ['./location-component.component.css']
})
export class LocationComponentComponent implements OnInit {

  status : string;

  constructor(private store : Store<LocationAppState[]>) { }

  ngOnInit() 
  {
    this.store.subscribe(appData => 
      {     
        this.handleStore(appData);       
      });    
  }

  ngAfterViewInit() {

     this.store.dispatch({     
      type: CITY_GET });

     this.store.dispatch({     
         type: COUNTRY_GET });       
    }

    handleStore(store : LocationAppState[])
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
    
    }

}
