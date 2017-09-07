import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  private remoteData: string = "http://jsonplaceholder.typicode.com/users"
  private mockData: string = "/assets/data/mock-data.json"

  constructor(private http: Http) { }

  public getRemoteData() {
    return this.http.get(this.remoteData) // we get an observable here
      .map((res: any) => res.json()); // then we can map and/or subscribe
  }

}
