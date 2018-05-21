import { Component, OnInit } from '@angular/core';
import { Question , Option } from '../_models/index';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions : Question[] = [];

  constructor() { }

  ngOnInit() {
  	this.questions = [{
  		"id": 1,
  		"name": "Who is PM ?",
  		options: [
  			{"id":1, "name": "Modi"},
  			{"id":2, "name": "Rahul"},
  			{"id":3, "name": "Kohli"},
  			{"id":4, "name": "Dhoni"}
  		]
  	}
  	];
  }

}
