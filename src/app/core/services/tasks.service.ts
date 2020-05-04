import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskCreateModel } from '../models/task-create.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private api_host = "https://palliative.azurewebsites.net";
  private tasks_url = "/api/tasks";


  constructor(public http: HttpClient) { }

  public getTasks(): any {
    return this.http.get(this.api_host + this.tasks_url);
  }

  public create(task: TaskCreateModel): any {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api_host + this.tasks_url, JSON.stringify(task), headers);
  }
}
