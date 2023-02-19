import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'martin-und-sophia';

  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  days: number = 0;
  month: number = 0;
  years: number = 0;


  beginningOfRelationship = new Date('2018-11-23T16:00')


  ngOnInit() {
    this.update()
    interval(1000).subscribe(() => this.update())
  }

  update() {
    const now = new Date(Date.now())
    var difference = now.getTime() - this.beginningOfRelationship.getTime();

    this.seconds = difference / 1000
    this.minutes =  difference / (1000 * 60);
    this.hours =  difference / (1000 * 3600)
    this.days =  difference / (1000 * 3600 * 24);

    this.month =  this.monthDiff(this.beginningOfRelationship, now)
    this.years =  new Date(difference).getFullYear() - 1970;
  }

  monthDiff(d1: Date, d2: Date): number {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

}
