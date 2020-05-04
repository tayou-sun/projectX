import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '~/app/core/models/poll';

@Component({
  selector: 'ns-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
