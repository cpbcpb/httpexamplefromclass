import { Injectable } from '@angular/core';
//you are importing both http and response
import { Http, Response } from '@angular/http';
//an observable is a stream and you have to subscribe to it....
//subscribe is an inexpensive function that watches something repeatedly
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: Http) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res) => res.json());
  }
}

