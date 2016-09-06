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

  values: Array<Object>

  ngAfterViewInit() {
    //jQuery("#menu").metisMenu();
  }

  constructor(private valuesService: ValuesService) {
    this.valuesService.getValuesToGenerateValuesArray().subscribe(  //in this example it's a call that always fail, so check err=>{....
      res => {
        console.log(res);
        //In case you are so crazy that you implemented a real service for this example :)

        //in a real scenario I want this data from the response,
        //but for this example it's ok
        this.values = [
          {val: 2, arr: [1,2,3,4]},
          {val: 3, arr: [1,2,3,4,5,6]},
          {val: 4, arr: [1]},
          {val: 5, arr: [1,2]}
        ];
        // NOT WORKING
        jQuery("#menu").metisMenu();
      },
      err => {
        console.log(err);
        //In case you are not using a real service and you want to catch the error to execute this example

        //in a real scenario I want this data from the response,
        //but for this example it's ok
        this.values = [
          {val: 2, arr: [1,2,3,4]},
          {val: 3, arr: [1,2,3,4,5,6]},
          {val: 4, arr: [1]},
          {val: 5, arr: [1,2]}
        ];
        // NOT WORKING
        jQuery("#menu").metisMenu();
      },
      () => console.log("done")
    );
  }
}
