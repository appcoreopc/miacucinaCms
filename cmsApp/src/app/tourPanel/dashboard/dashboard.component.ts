import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counterReducer';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counter: Observable<number>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter = this.store.select('counter');    
  }

  increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
  }
}
