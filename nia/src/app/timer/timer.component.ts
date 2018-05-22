import { Component, OnInit } from '@angular/core';

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  countDown;
   count = 60;

   constructor() {
   range(1, 200)
    .pipe(filter(x => x % 2 === 1), map(x => x + x))
    .subscribe(x => console.log(x));
    
       //this.countDown = timer(0,1000).pipe(
       // take(this.count),
       // map(()=> --this.count)
     // );
   }

   ngOnInit() {
  }

}
