import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskCalendarService {

  private api_host = "https://palliative.azurewebsites.net";
  private calendar_task = "/api/CallendarTasks?";

  constructor(public http: HttpClient) { }


  public get(year:number, month: number):any{
    return this.http.get(this.api_host + this.calendar_task + 'year='+ year +'&month=' + month);
  }
}
