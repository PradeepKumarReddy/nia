import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {}

  register() {
  	
  }
}
