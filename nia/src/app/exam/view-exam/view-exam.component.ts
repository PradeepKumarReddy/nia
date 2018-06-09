import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Exam, Question } from '../../_models/index';
import { ExamService } from '../../_services/index';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers':'*' })
  };

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent implements OnInit {

  p : number = 1;
  exam : Exam;
  examId : number;
  questions : Question[] = [];

  constructor(private router: Router, private route: ActivatedRoute, 
  								private examService : ExamService) { }

  ngOnInit() {
  	//this.examId = this.route.snapshot.params['examId'];
  	this.route.params.subscribe(
  		(params: Params) => {
  			this.examId = params['examId'];
  			this.loadExam(this.examId);
  		}   
  	);

  }

  loadExam(examId : number) {
  	this.examService.getExamById(examId).subscribe(
      (exam : Exam) => {
       console.log(exam.questions);
       this.exam = exam;
       this.questions = [...exam.questions]
       //this.questions.push();
       },
      err => console.error(err),
      () => console.log('loaded Exam successful')
    );
  }

}
