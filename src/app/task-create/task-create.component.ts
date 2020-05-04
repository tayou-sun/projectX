import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../core/models/task.model';
import { TmplAstElement } from '@angular/compiler';
import { TaskCreateModel } from '../core/models/task-create.model';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { getViewById, EventData } from 'tns-core-modules/ui/page/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Time } from '@angular/common';
import { RouterExtensions } from 'nativescript-angular';
import { TasksService } from '../core/services/tasks.service';

@Component({
  selector: 'ns-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: TaskCreateModel = new TaskCreateModel();
  date: string = "" ;
  time: string = "" ;
  currentDate: Date = new Date();
  selectedDate: Date = new Date();
  selectedTime: Time ;

  constructor(public taskSevices: TasksService, public router: RouterExtensions) {
   }

  ngOnInit(): void {
    console.log('current date' + this.currentDate);
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
      this.date = this.task.Start.toLocaleDateString();
      
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

  onDateChange(event): void{
    // let datepicker field = event;
    console.log(typeof(event));
  }

  onCreateButtonClick(event): void {

    console.log('tap create task');
    console.log(this.selectedTime);
    console.log(this.selectedDate);
    // this.task.IsPeriodic = false;
    this.task.Start = new Date("2020-05-04T12:30:00");
    
    this.taskSevices.create(this.task).subscribe((x: any) => {
      if(this.date != null){
        this.task.Start = new Date(this.selectedDate);
        this.task.Start.setHours(this.selectedTime.hours);
        this.task.Start.setMinutes(this.selectedTime.minutes);
        console.log(this.date);
        console.log('date');
      }
      console.log("created task");
      console.log(JSON.stringify(x));
      this.router.navigate(["tasks"],{ clearHistory: true } );

    });
  }

}
