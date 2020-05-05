import { Component, OnInit } from '@angular/core';
import * as calendarModule from "nativescript-ui-calendar";
import { Router } from '@angular/router';
import { Color } from 'tns-core-modules/color/color';
import { TaskCalendarService } from '../../core/services/task-calendar.service';
import { Task } from '../../core/models/task.model';

@Component({
    selector: 'ns-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    calendarEvents = [];
    calendarTask: Task[];

    constructor(public router: Router, public calendarTaskService: TaskCalendarService) {
    }

    public onEmailSend(event): void {
        this.router.navigateByUrl("/tasks-create");

    }
    ngOnInit(): void {
        this.calendarTaskService.get(2020, 5).subscribe((x: Task[]) => {
            this.calendarTask = <Task[]>x;
            this.fillEvents();

        });
    }

    fillEvents() {
        let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events = [];
        for (let i = 0; i < this.calendarTask.length; i++) {
            let now = new Date();
            let startDate: Date = new Date(this.calendarTask[i].start);//new Date(this.calendarTask[i].start.getMilliseconds());
            let endDate: Date = new Date(this.calendarTask[i].end == null ? this.calendarTask[i].start : this.calendarTask[i].end);
            let event = new calendarModule.CalendarEvent(this.calendarTask[i].title,  startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
        }
        this.calendarEvents = events;
    }

    onDateSelected(args) {
    }

    onDateDeselected(args) {
    }

    onNavigatedToDate(args) {
    }

    onNavigatingToDateStarted(args) {
    }

    onViewModeChanged(args) {
    }
}
