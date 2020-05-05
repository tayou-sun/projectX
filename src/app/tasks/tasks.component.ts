import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { registerElement } from 'nativescript-angular/element-registry';
import { Task } from '../core/models/task.model';
/* registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab); */
import { CheckBox } from 'nativescript-checkbox';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { TasksService } from '../core/services/tasks.service';

@Component({
  selector: 'ns-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

private taskService: TasksService; 
public tasks: Task[];
public currentDate: string = "";

onItemTap(args: ItemEventData): void {
    console.log('Item with index: ' + args.index + ' tapped');
}

  constructor(public taskSevices: TasksService, public router: RouterExtensions) {
    this.taskService = taskSevices;
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((x:Task[])=>{
      this.tasks = x;
      

      console.log(this.tasks);
    });
    
    var d = new Date();
    
    var curr_date = d.getDate();
    
    var curr_month = d.getMonth() + 1;
    
    var curr_year = d.getFullYear();
    
     
   this.currentDate = curr_year + "-" + curr_month + "-" + curr_date;
    
    
    console.log('task init');
    
  }

  public onTaskAdd(event): void{
    console.log("--------------Add task---------------");
 //    this.router.navigateByUrl("/eventcreate");

  }



  fabTap() : void {
    console.log('fab tab');
    this.router.navigate(["tasks-create"],{ clearHistory: true } );
      //  this.router.navigateByUrl("tasks-create");
  }
}
