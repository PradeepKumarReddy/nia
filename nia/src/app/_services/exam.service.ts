import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Exam } from '../_models/index';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers':'*' })
  };

@Injectable()
export class ExamService {
  
  constructor(private http: HttpClient) { }

  getExamById(examId : number) : Observable<Exam> {
  	return this.http.get<Exam>("http://localhost:8080/api/exam/get/"+examId, httpOptions);
  }
  
}
