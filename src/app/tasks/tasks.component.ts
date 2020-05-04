import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { registerElement } from 'nativescript-angular/element-registry';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
/* registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab); */
import { CheckBox } from 'nativescript-checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  countries: { name: string, imageSrc: string }[] = [
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
    { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
    { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
    { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
    { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
    { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
    { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
    { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
    { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
    { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
    { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
    { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
    { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
    { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
    { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
];

private taskService: TasksService; 
public tasks: Task[];

onItemTap(args: ItemEventData): void {
    console.log('Item with index: ' + args.index + ' tapped');
}

  constructor(public taskSevices: TasksService, public router: Router) {
    this.taskService = taskSevices;
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((x:Task[])=>{
      this.tasks = x;
      

      console.log(this.tasks);
    });
    console.log('task init');
    
  }

  public onTaskAdd(event): void{
    console.log("--------------Add task---------------");
 //    this.router.navigateByUrl("/eventcreate");

  }



  fabTap() : void {
    console.log('fab tab');
    this.router.navigateByUrl("/tasks-create");
  }
}
