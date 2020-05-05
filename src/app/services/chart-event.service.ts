import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartEventService {

  eventChanged = new Subject<string[]>();

  private events: string[] = [
  ]
  constructor() { }

  addEvent(event: string) {
    this.events.push(event);
    this.eventChanged.next(this.events.slice());
  }

  getEvents() {
    return this.events.slice();
  }
}
