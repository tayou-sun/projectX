import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../core/models/task.model';
import { TmplAstElement } from '@angular/compiler';
import { TaskCreateModel } from '../../core/models/task-create.model';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { getViewById, EventData } from 'tns-core-modules/ui/page/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Time } from '@angular/common';
import { RouterExtensions } from 'nativescript-angular';
import { TasksService } from '../../core/services/tasks.service';

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
  public currentTime: Date = new Date();
  public selectedDate: Date = new Date();
  public selectedTime: Date = new Date();

  constructor(public taskSevices: TasksService, public router: RouterExtensions) {
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
      this.task.Start = new Date(result['year'] + '-' + result['month'] + '-' + result['day']);
      this.date = this.task.Start.toLocaleDateString();
      
      (<TextField>event).text = this.task.Start.toString();
      (<TextField>event).hint = this.task.Start.toString();
    }).catch((error) => {
    });
  }

  onTimeTap(event, args: EventData): void {
    const picker = new ModalPicker.ModalDatetimepicker();
    let parent = <StackLayout>event;
    picker
      .pickTime()
      .then((result) => {

        if(this.task.Start == null){
          var date = new Date();
          this.task.Start = date;
        }
        this.time = result.hour + ':' + result.minute;
        this.task.Start.setHours(result.hour);
        this.task.Start.setMinutes(result.minute);
      }).catch((error) => {
      });
  }

  onDateChange(event): void{
  }

  onCreateButtonClick(event): void {
    
    if(this.selectedDate != null){
      this.task.Start = new Date(this.selectedDate);
    
      this.task.Start.setHours(this.selectedTime.getHours()+3);
      this.task.Start.setMinutes(this.selectedTime.getMinutes());
    }else{
      this.task.Start = new Date();
    }
    
    if(this.task.Start == null){
      var date = new Date();
      this.task.Start = date;
    }

    this.taskSevices.create(this.task).subscribe((x: any) => {

    });
    this.router.navigate(["tasks"],{ clearHistory: true } );
  }

}