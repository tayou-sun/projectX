import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticlesDataService } from '../services/article.data.service';
import { TasksService } from '../services/tasks.service';
import { ProblemsDataService } from '../services/problem.data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArticlesDataService,
    TasksService,
    ProblemsDataService
  ],
  declarations: []
})
export class CoreModule { }