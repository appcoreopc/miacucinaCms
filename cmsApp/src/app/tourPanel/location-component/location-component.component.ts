import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { LocationAppState } from '../shared/sharedObjects';
import { Store } from '@ngrx/store';

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

}
