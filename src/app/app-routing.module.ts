import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { EventCreateComponent } from "./event-create/event-create.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskCreateComponent } from "./task-create/task-create.component";
import { ArticlesComponent } from "./articles/articles.component";
import { UserComponent } from "./components/user/user.component";
import { ProblemPickerComponent } from "./shared/problem-picker/problem-picker.component";
import { FavouriteComponent } from "./components/favourite/favourite.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "calendar", component: CalendarComponent },
    { path: "eventcreate", component: EventCreateComponent },
    {path: "tasks", component: TasksComponent},
    {path: "tasks-create", component: TaskCreateComponent},
    { path: "articles", component: ArticlesComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "user", component: UserComponent },
    { path: "problems", component: ProblemPickerComponent },
    { path: "*", redirectTo: "/home", pathMatch: "full" },
    { path: "favourite", component: FavouriteComponent },
    {
        path: 'day-book',
        loadChildren: './components/day-book/day-book.module#DayBookModule'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
