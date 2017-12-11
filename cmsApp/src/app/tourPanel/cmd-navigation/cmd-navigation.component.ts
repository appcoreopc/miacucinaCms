import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cmd-navigation',
  templateUrl: './cmd-navigation.component.html',
  styleUrls: ['./cmd-navigation.component.css']
    })
export class CmdNavigationComponent implements OnInit {


  constructor(private route : ActivatedRoute) {

   }

  ngOnInit() {

  }

}
