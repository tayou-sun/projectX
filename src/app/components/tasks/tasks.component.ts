import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Task } from '../../core/models/task.model';
import { RouterExtensions } from 'nativescript-angular';
import { TasksService } from '../../core/services/tasks.service';

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
}

  constructor(public taskSevices: TasksService, public router: RouterExtensions) {
    this.taskService = taskSevices;
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((x:Task[])=>{
      this.tasks = x;
    });   
    
  }

  public onTaskAdd(event): void{
  }


  onCreateClick() : void {
    this.router.navigate(["tasks-create"],{ clearHistory: true } );
  }
}
