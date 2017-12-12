import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

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

  // @Input()
  // countries : DropDownValue[];
  
  // @Input()
  // cities : DropDownValue[];

  constructor() { }

  ngOnInit() {
  }

}
