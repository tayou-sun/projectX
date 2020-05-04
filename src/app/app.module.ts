import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CalendarComponent } from './calendar/calendar.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProblemSearchComponent } from './problem-search/problem-search.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from "./services/tasks.service";
import { TaskCreateComponent } from './task-create/task-create.component';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDataService } from "./services/article.data.service";
import { HttpClientModule } from "@angular/common/http";
import { NgShadowModule } from 'nativescript-ng-shadow';
import { UserComponent } from './components/user/user.component';
import { NativeScriptPickerModule } from "nativescript-picker/angular";
import { ProblemPickerComponent } from './components/problem-picker/problem-picker.component';
import { ProblemsDataService } from "./services/problem.data.service";
import { HomeModule } from "./home/home.module";
import { FavouriteComponent } from './components/favourite/favourite.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { CoreModule } from "./core/core.module";

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
        HttpClientModule,
        NgShadowModule,
        NativeScriptPickerModule,
        HomeModule,
        FontAwesomeModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        CalendarComponent,
        ProblemsComponent
    ],

    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
