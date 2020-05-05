import { Component, OnInit } from '@angular/core';
import { PollsService } from '../services/polls.service';
import { ChartEventService } from '../services/chart-event.service';
import { Poll } from '../models/poll.model';

@Component({
  selector: 'ns-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  polls: Poll[];

  constructor(public pollDataService: PollsService,
              public chartEvenService: ChartEventService) { }

  ngOnInit(): void {
  }

  onPollsLoad(){
    this.pollDataService.get()
      .subscribe((args:Poll[]) => {
        this.polls = args;
        console.log('Loaded '+ args.length + ' polls');
      });
    
  }

}
