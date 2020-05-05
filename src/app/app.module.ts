import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CalendarComponent } from './calendar/calendar.component';
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptPickerModule } from "nativescript-picker/angular";
import { HomeModule } from "./home/home.module";
import { ProblemsComponent } from './components/problems/problems.component';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { DayBookComponent } from './components/day-book/day-book.component';
import { DayBookModule } from "./components/day-book/day-book.module";
import { ArticlesDataService } from "./core/services/article.data.service";
import { TasksService } from "./core/services/tasks.service";
import { ProblemsDataService } from "./core/services/problem.data.service";
import { FavouriteComponent } from './components/favourite/favourite.component';
import { TaskCalendarService } from "./services/task-calendar.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptDateTimePickerModule,
        FontAwesomeModule,
        NgShadowModule,
        NativeScriptPickerModule,
        HomeModule,
        FontAwesomeModule,
        CoreModule,
        SharedModule,
        DayBookModule
    ],
    declarations: [
        AppComponent,
       
        ProblemsComponent
        
    ],
    providers:[
        ArticlesDataService,
        TasksService,
        ProblemsDataService,
        TaskCalendarService
    ],

    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
