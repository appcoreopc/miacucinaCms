import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CITY_CANCEL, CITY_SAVE, CityAppState } from './cityReducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit {
  counter: Observable<number>;

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
    this.counter = this.store.select("status");   
  }

  save(){

    this.store.dispatch({
       name : 'nz', 
       description : 'nz',
       type: CITY_SAVE });
  }
  
  cancel(){
		this.store.dispatch({ type: CITY_CANCEL });
	}  

}