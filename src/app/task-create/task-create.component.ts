import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TmplAstElement } from '@angular/compiler';
import { TaskCreateModel } from '../models/task-create.model';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { getViewById, EventData } from 'tns-core-modules/ui/page/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

@Component({
  selector: 'ns-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: TaskCreateModel = new TaskCreateModel();
  date: string = "Выберите дату";
  time: string = "Выберите время";

  constructor(public taskSevices: TasksService, public router: Router) {
   }

  ngOnInit(): void {

  }

  onDateTap(event, args: EventData): void {
    const picker = new ModalPicker.ModalDatetimepicker();
    let parent = <StackLayout>event;//.object;
    picker.pickDate({
      title: 'Please enter your birthday',
      theme: 'dark',
      maxDate: new Date("2920-05-04T12:30:00"),
      is24HourView: false
    }).then((result) => {
      // this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
      this.task.Start = new Date(result['year'] + '-' + result['month'] + '-' + result['day']);
      this.date = this.task.Start.toLocaleDateString()
      ;
      
      (<TextField>event).text = this.task.Start.toString();
      (<TextField>event).hint = this.task.Start.toString();
      // let date = (<TextField>event).text;
      // console.log('selected ' + date);
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  onTimeTap(event, args: EventData): void {
    const picker = new ModalPicker.ModalDatetimepicker();
    let parent = <StackLayout>event;//.object;
    picker
      .pickTime()
      .then((result) => {
        // this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
        // this.task.Start = new Date(result['year'] + '-' + result['month'] + '-' + result['day']);
        // (<TextField>event).text = this.task.Start.toString();
        // (<TextField>event).hint = this.task.Start.toString();
        // let date = (<TextField>event).text;
        // console.log('selected ' + date);
        if(this.task.Start == null){
          this.task.Start = new Date();
        }
        this.time = result.hour + ':' + result.minute;
        this.task.Start.setHours(result.hour);
        this.task.Start.setMinutes(result.minute);
        console.log(this.task.Start);
      }).catch((error) => {
        console.log('Error: ' + error);
      });
  }

  onCreateButtonClick(event): void {

    console.log('tap create task');

    // this.task.IsPeriodic = false;
    this.task.Start = new Date("2020-05-04T12:30:00");
    // this.task.Title  = "Выдать лекарство";

    this.taskSevices.create(this.task).subscribe((x: any) => {
      console.log("created task");
      console.log(JSON.stringify(x));
      this.router.navigateByUrl("/tasks");

    });
  }

}
