import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollResultsService {

  private api_host = "https://palliative.azurewebsites.net";

  constructor(public http: HttpClient) { }

  getResuts(pollId: number): any{
    return this.http.get(this.api_host + '/api/PollResults?pollId='+pollId);
  }

  postResults(pollId: number) :any{
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let body = {
      "pollId": pollId
    }

    return this.http.post(this.api_host + '/api/PollResults', JSON.stringify(body), headers);
  }

  getResultsById(pollId: number):any{
    return this.http.get(this.api_host + '/api/PollResults/' + pollId);
  }

  getResultsNextQuestion() :any{

  }

  postResultsNextQuestion() :any{

  }
}
