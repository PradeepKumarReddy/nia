import { Component, OnInit } from '@angular/core';
import { Question, QuestionOption } from "../_models/index";

import { TimerComponent } from '../timer/timer.component';

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
  		/*this.questions = [
  			{
  			"id": 1,
  			"questionDesc": "Who is PM ?",
	  		options: [
	  			{"id":1, "optionDesc": "Modi"},
	  			{"id":2, "optionDesc": "Rahul"},
	  			{"id":3, "optionDesc": "Mayawati"},
	  			{"id":4, "optionDesc": "Advani"}
	  		]},
	  		{
  			"id": 2,
  			"questionDesc": "Capital of Andhrapradesh ?",
	  		options: [
	  			{"id":1, "optionDesc": "Amaravati"},
	  			{"id":2, "optionDesc": "Hyderabad"},
	  			{"id":3, "optionDesc": "Kadapa"},
	  			{"id":4, "optionDesc": "Kurnool"}
	  		]},
	  		{
  			"id": 3,
  			"questionDesc": "Capital of India?",
	  		options: [
	  			{"id":1, "optionDesc": "Kolkata"},
	  			{"id":2, "optionDesc": "Mumbai"},
	  			{"id":3, "optionDesc": "Delhi"},
	  			{"id":4, "optionDesc": "Bangalore"}
	  		]},
	  		{
  			"id": 4,
  			"questionDesc": "Most ODI centuries played by Cricketer ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 5,
  			"questionDesc": "Java latest version ?",
	  		options: [
	  			{"id":1, "optionDesc": "6"},
	  			{"id":2, "optionDesc": "8"},
	  			{"id":3, "optionDesc": "10"},
	  			{"id":4, "optionDesc": "9"}
	  		]},{
  			"id": 6,
  			"questionDesc": "National Animal ?",
	  		options: [
	  			{"id":1, "optionDesc": "Peakock"},
	  			{"id":2, "optionDesc": "Tiger"},
	  			{"id":3, "optionDesc": "Bengal Tiger"},
	  			{"id":4, "optionDesc": "Elepent"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"questionDesc": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "optionDesc": "Ponting"},
	  			{"id":2, "optionDesc": "Sachin"},
	  			{"id":3, "optionDesc": "Kohli"},
	  			{"id":4, "optionDesc": "Dhoni"}
	  		]}

	  	];
	  	*/
  }

  onSelect(question , option) {
  	question.isAnswered = false;
  	question.options.forEach (function(element, index, array) {
  		if(element.id != option.id) {
  			element.selected = false;
  		}
  	});
  	question.options.forEach (function(element) {
  		if(element.selected) {
  			question.isAnswered = true;
  		}
  	});
  	//console.log(question);
  }

  gotoQuestion(i) {
  	this.p = i+1;
  }

}
