import { Component, OnInit } from '@angular/core';
import { Question, Option } from "../_models/index";

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
  			"id": 4,
  			"name": "Most ODI centuries played by Cricketer ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 5,
  			"name": "Java latest version ?",
	  		options: [
	  			{"id":1, "name": "6"},
	  			{"id":2, "name": "8"},
	  			{"id":3, "name": "10"},
	  			{"id":4, "name": "9"}
	  		]},{
  			"id": 6,
  			"name": "National Animal ?",
	  		options: [
	  			{"id":1, "name": "Peakock"},
	  			{"id":2, "name": "Tiger"},
	  			{"id":3, "name": "Bengal Tiger"},
	  			{"id":4, "name": "Elepent"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]},
	  		{
  			"id": 7,
  			"name": "Best palyer of year ?",
	  		options: [
	  			{"id":1, "name": "Ponting"},
	  			{"id":2, "name": "Sachin"},
	  			{"id":3, "name": "Kohli"},
	  			{"id":4, "name": "Dhoni"}
	  		]}

	  	];
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
