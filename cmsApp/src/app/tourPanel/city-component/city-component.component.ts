import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CITY_CANCEL, CITY_SAVE } from './cityReducer';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.counter = this.store.select("counter");
  }

  save(){
		this.store.dispatch({ type: CITY_SAVE });
  }
  
  cancel(){
		this.store.dispatch({ type: CITY_CANCEL });
	}  

}
