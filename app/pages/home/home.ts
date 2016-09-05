import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

declare var jQuery:any;

@Component({
  selector: 'home-page',
  styleUrls: [],
  templateUrl: 'app/pages/home/home.html'
})
export default class HomeComponent {

  values: Array<string> = ['2','3','4','5'];

  ngAfterViewInit() {
    jQuery("#menu").metisMenu();
  }

  constructor() {
  }
}
