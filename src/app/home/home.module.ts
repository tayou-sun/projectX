import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UserComponent } from "../components/user/user.component";
import { ArticlesComponent } from "../components/articles/articles.component";
import { TasksComponent } from "../components/tasks/tasks.component";
import { TaskCreateComponent } from "../components/task-create/task-create.component";
import { EventCreateComponent } from "../components/event-create/event-create.component";
import { FavoriteComponent } from "../components/favorite/favorite.component";
import { SharedModule } from "../shared/shared.module";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { CalendarComponent } from "../components/calendar/calendar.component";
import { ChartsComponent } from "../components/charts/charts.component";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular/chart-directives";
import { PollsComponent } from "../components/polls/polls.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        SharedModule,
        NativeScriptCommonModule,
        NativeScriptDateTimePickerModule,
        NativeScriptUIChartModule,
    ],
    declarations: [
        HomeComponent,
        ArticlesComponent,
        UserComponent,
        TasksComponent,
        TaskCreateComponent,
        EventCreateComponent,
        FavoriteComponent,
        CalendarComponent,
        ChartsComponent
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {

   
 }
