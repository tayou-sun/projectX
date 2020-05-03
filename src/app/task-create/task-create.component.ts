import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TmplAstElement } from '@angular/compiler';
import { TaskCreateModel } from '../models/task-create.model';

@Component({
  selector: 'ns-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: TaskCreateModel = new TaskCreateModel();

  constructor(public taskSevices: TasksService, public router: Router) { }

  ngOnInit(): void {
    
  }

  onCreateButtonClick(event): void{

    console.log('tap create task');
    
    this.task.IsPeriodic = false;
    this.task.Start = new Date("2020-05-04T12:30:00");
   // this.task.Title  = "Выдать лекарство";

    this.taskSevices.create(this.task).subscribe((x: any)=>{
      console.log("created task");
      console.log(JSON.stringify(x));
    });
  }

}
