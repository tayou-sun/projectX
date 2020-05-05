import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Poll } from '~/app/core/models/poll';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];
  @Output() createProfile = new EventEmitter<number>();
  constructor(private router: RouterExtensions) { }

  
  ngOnInit(): void {
  }

  public onCreatrProfileClick(id) {
    this.router.navigate([`profile/${id}`],{clearHistory: true})
   
  }
}
