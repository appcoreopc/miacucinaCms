import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CITY_CANCEL, CITY_SAVE, CityAppState, CITY_GET, CITY_SAVE_SUCCESS } from './cityReducer';
import { Observable } from 'rxjs/Observable';
import { combineAll } from 'rxjs/operator/combineAll';

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit {
  
  status: Observable<number>;
  name : string = ""; 
  description : string = "";
  
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  
  constructor(private store : Store<CityAppState>) { }
  ngOnInit() {
    
    this.store.subscribe( a => 
    {     
      this.tryGetState(a);       
    });     
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
                console.log(message);
                switch (message.status) {
                  case 4: 
                    this.status  = "Save successful.";
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
      