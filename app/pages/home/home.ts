import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

declare var jQuery:any;

@Component({
  selector: 'home-page',
  styleUrls: [],
  templateUrl: 'app/pages/home/home.html'
})
export default class HomeComponent {

  values: Array<Object> = [
    {val: 2, arr: [1,2,3,4]},
    {val: 3, arr: [1,2,3,4,5,6]},
    {val: 4, arr: [1]},
    {val: 5, arr: [1,2]}
  ];

  ngAfterViewInit() {
    jQuery("#menu").metisMenu();
  }

  constructor() {

  }
}
