import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CITY_CANCEL, CITY_SAVE, CityAppState, CITY_GET } from './cityReducer';
import { Observable } from 'rxjs/Observable';

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
    
    this.status = this.store.select("status"); 
    
    this.status.subscribe( x => {

      console.log('status changed!!!!');
    });
    
    Observable.combineLatest(
      this.store.select('status'), 
      (status:any) => {
        console.log(status); 
        console.log('ulalala');      
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
      
    }
    