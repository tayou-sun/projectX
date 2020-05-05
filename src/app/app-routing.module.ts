import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { EventCreateComponent } from "./components/event-create/event-create.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskCreateComponent } from "./components/task-create/task-create.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { UserComponent } from "./components/user/user.component";
import { ProblemPickerComponent } from "./shared/problem-picker/problem-picker.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { PollsComponent } from "./components/polls/polls.component";
import { DayBookComponent } from "./components/day-book/day-book.component";
import { ProfileComponent } from "./components/day-book/components/profile/profile.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "calendar", component: CalendarComponent },
    { path: "eventcreate", component: EventCreateComponent },
    { path: "tasks", component: TasksComponent },
    { path: "tasks-create", component: TaskCreateComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "user", component: UserComponent },
    { path: "problems", component: ProblemPickerComponent },
    { path: "favorite", component: FavoriteComponent },
    { path: "charts", component: ChartsComponent },
    { path: "polls", component: PollsComponent },
    { path: "*", redirectTo: "/home", pathMatch: "full" },
    
    {
        path: 'day-book',
        component: DayBookComponent
    },
    {
        path: 'profile/:id',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
