import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesDataService } from './services/article.data.service';
import { TasksService } from './services/tasks.service';
import { ProblemsDataService } from './services/problem.data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarListComponent } from './components/navbar-list/navbar-list.component';
import { ApiService } from './services/api.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ArticlesDataService,
    TasksService,
    ProblemsDataService,
    ApiService
  ],
  declarations: [NavbarListComponent],
  exports:[NavbarListComponent]
})
export class CoreModule { }