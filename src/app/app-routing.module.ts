import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { EventCreateComponent } from "./event-create/event-create.component";
import { ArticlesComponent } from "./articles/articles.component";
import { UserComponent } from "./components/user/user.component";
import { ProblemPickerComponent } from "./components/problem-picker/problem-picker.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "calendar", component: CalendarComponent },
    { path: "eventcreate", component: EventCreateComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "user", component: UserComponent },
    { path: "problems", component: ProblemPickerComponent },
    { path: "*", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
