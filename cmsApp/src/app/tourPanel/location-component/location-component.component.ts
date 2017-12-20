import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { LocationAppState } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';
import { LOCATION_GET } from '../shared/sharedObjects';

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


  constructor(private store : Store<LocationAppState[]>) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.store.dispatch({     
      type: LOCATION_GET });
    }

}
