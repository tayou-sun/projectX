import { Component, OnInit } from '@angular/core';
import { ProblemsDataService } from '~/app/core/services/problem.data.service';
import { DayBookDataService } from './day-book.data.service';
import { Poll } from '~/app/core/models/poll';

@Component({
  selector: 'ns-day-book',
  templateUrl: './day-book.component.html',
  styleUrls: ['./day-book.component.css']
})
export class DayBookComponent implements OnInit {

  constructor(private dataService: DayBookDataService) { }

  polls: Poll[] = [];

  ngOnInit(): void {
    this.dataService.get()
      .subscribe((polls: Poll[]) => {
        this.polls = polls;
      });
  }

}
