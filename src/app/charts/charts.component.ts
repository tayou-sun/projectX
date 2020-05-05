import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { PollsService } from '../services/polls.service';
import { PollResultsService } from '../services/poll-results.service';
import { Poll } from '../models/poll.model';
import { PollResult } from '../models/poll-result.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  id: number=0;;

  public favoriteFruits  = [
    { type: "20.03.2020", count: 12 , color:"#43A047"},
    { type: "21.03.2020", count: 11 , color:"#FFB300"},
    { type: "05.04.2020", count: 10 , color:"#FFB300"},
    { type: "10.05.2020", count: 7 , color:"#FFB300"},
    { type: "12.05.2020", count: 4 , color:"#43A047"}
];

  public polls: PollResult[];
  pageTitle = "Оценка риска падения";

  constructor(public pollService: PollsService , 
      private route: ActivatedRoute,
    public pollResultService: PollResultsService) { }

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void{
     this.route.params.subscribe(params=>this.id = params['pollId']);

     this.id = this.id == 0 || this.id ==undefined ? 1: this.id;

    this.pollResultService.getResuts(this.id).subscribe((x:PollResult[])=>{
      this.polls = x;
      this.pageTitle = x[0].pollTitle;
    });
  }

}
