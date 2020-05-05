import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { PollsService } from '../services/polls.service';
import { PollResultsService } from '../services/poll-results.service';
import { Poll } from '../models/poll.model';
import { PollResult } from '../models/poll-result.model';

@Component({
  selector: 'ns-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public favoriteFruits  = [
    { type: "20.03.2020", count: 12 , color:"#43A047"},
    { type: "21.03.2020", count: 11 , color:"#FFB300"},
    { type: "05.04.2020", count: 10 , color:"#FFB300"},
    { type: "10.05.2020", count: 7 , color:"#FFB300"},
    { type: "12.05.2020", count: 4 , color:"#43A047"}
];

  public polls: PollResult[];

  constructor(public pollService: PollsService , public pollResultService: PollResultsService) { }

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void{
    let pollId = 1;
    this.pollResultService.getResuts(pollId).subscribe((x:PollResult[])=>{
      this.polls = x;
    });
  }

}
