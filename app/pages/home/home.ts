import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ValuesService} from '../../common/services/values.service';

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
    //jQuery("#menu").metisMenu();
  }

  constructor(private valuesService: ValuesService) {
    this.valuesService.getValuesToGenerateValuesArray().subscribe(
      res => {
        console.log(res);
        // NOT WORKING
        jQuery("#menu").metisMenu();
      },
      err => {
        console.log(err);
      },
      () => console.log("done")
    );
  }
}
