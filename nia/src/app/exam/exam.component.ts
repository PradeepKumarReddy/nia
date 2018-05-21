import { Component, OnInit } from '@angular/core';
import { Question, Option } from "../_models/index";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  p : number = 1;
  questions : Question[] = [];

  constructor() { }

  ngOnInit() {
  		this.questions = [
  			{
  			"id": 1,
  			"name": "Who is PM ?",
	  		options: [
	  			{"id":1, "name": "Modi"},
	  			{"id":2, "name": "Rahul"},
	  			{"id":3, "name": "Mayawati"},
	  			{"id":4, "name": "Advani"}
	  		]},
	  		{
  			"id": 2,
  			"name": "Capital of Andhrapradesh ?",
	  		options: [
	  			{"id":1, "name": "Amaravati"},
	  			{"id":2, "name": "Hyderabad"},
	  			{"id":3, "name": "Kadapa"},
	  			{"id":4, "name": "Kurnool"}
	  		]},
	  		{
  			"id": 3,
  			"name": "Capital of India?",
	  		options: [
	  			{"id":1, "name": "Kolkata"},
	  			{"id":2, "name": "Mumbai"},
	  			{"id":3, "name": "Delhi"},
	  			{"id":4, "name": "Bangalore"}
	  		]},
	  		{
  			"id": 1,
  			"name": "Most ODI centuries played by Cricketer ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]}
	  	];
  }

  onSelect(question , option) {
  	question.options.forEach (function(element, index, array) {
  		if(element.id != option.id) {
  			element.selected = false;
  		}
  	});
  }

}
