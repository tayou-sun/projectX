import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private api_host = "https://palliative.azurewebsites.net";
  private polls = "/api/Polls";

  constructor(public http: HttpClient) { }

  get():any{
    return this.http.get(this.api_host + this.polls);
  }
}
