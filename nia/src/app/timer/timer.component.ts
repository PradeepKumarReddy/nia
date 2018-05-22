import { Component, OnInit } from '@angular/core';

//import { timer } from 'rxjs/observable/timer';
//import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  countDown;
   count = 60;

   constructor() {

       //this.countDown = timer(0,1000).pipe(
       //   take(this.count),
       //   map(()=> --this.count)
       //);
   }

   ngOnInit() {
  }

}
