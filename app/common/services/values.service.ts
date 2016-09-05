
import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {of} from 'rxjs/observable/of';
import {interval} from 'rxjs/observable/interval';
import {timer} from 'rxjs/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class ValuesService {
  constructor(private http: Http) {}

  getValuesToGenerateValuesArray(): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/values')
      .map(response => response.json());
  }

}
