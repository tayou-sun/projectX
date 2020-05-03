import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { EventCreateComponent } from "./event-create/event-create.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskCreateComponent } from "./task-create/task-create.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "calendar", component: CalendarComponent },
    { path: "eventcreate", component: EventCreateComponent },
    {path: "tasks", component: TasksComponent},
    {path: "tasks-create", component: TaskCreateComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
