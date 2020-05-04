import { Component, OnInit } from '@angular/core';
import * as calendarModule from "nativescript-ui-calendar";
import { Router } from '@angular/router';
import { Color } from 'tns-core-modules/color/color';
import { TaskCalendarService } from '../services/task-calendar.service';
import { Task } from '../models/task.model';

@Component({
    selector: 'ns-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    calendarEvents = [];
    calendarTask: Task[];

    constructor(public router: Router, public calendarTaskService: TaskCalendarService) {
        // Creating dummy events
        //   let events = [];
        //   let now = new Date();
        //   let startDate;
        //   let endDate;
        //   let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        //   for (let i = 1; i < 10; i++) {
        //       startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
        //       endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
        //       let event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
        //       events.push(event);
        //       if (i % 3 == 0) {
        //           event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        //           events.push(event);
        //       }
        //   }
        //   this.calendarEvents = events;
    }

    public onEmailSend(event): void {
        console.log("-----------------------------");
        this.router.navigateByUrl("/eventcreate");

    }

    ngOnInit(): void {
        console.log('init');
        this.calendarTaskService.get(2020, 5).subscribe((x: Task[]) => {
            this.calendarTask = <Task[]>x;

            console.log('tasks ' + JSON.stringify(x));
            this.fillEvents();

        });
    }

    fillEvents() {
        let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events = [];
        console.log('length  ' + this.calendarTask.length);
        for (let i = 0; i < this.calendarTask.length; i++) {

            console.log(JSON.stringify(this.calendarTask[i]));
            console.log('start   ' + this.calendarTask[i].start);
            console.log('start time' + this.calendarTask[i].start.getTime());
            let now = new Date();
            // let startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            // let endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            let startDate: Date = this.calendarTask[i].start;//new Date(this.calendarTask[i].start.getMilliseconds());
            let endDate: Date = (this.calendarTask[i].end == null ? this.calendarTask[i].start : this.calendarTask[i].end);
            let event = new calendarModule.CalendarEvent(this.calendarTask[i].title,  startDate, startDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
        }
        this.calendarEvents = events;
    }


    onDateSelected(args) {
        console.log("onDateSelected: " + args.date);
    }

    onDateDeselected(args) {
        console.log("onDateDeselected: " + args.date);
    }

    onNavigatedToDate(args) {
        console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        console.log("onViewModeChanged: " + args.newValue);
    }
}
