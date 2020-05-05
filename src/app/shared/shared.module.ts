import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RouterExtensions } from "nativescript-angular/router";
import { Page, EventData } from "tns-core-modules/ui/page/page";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UserComponent } from "../components/user/user.component";
import { ArticlesComponent } from "../articles/articles.component";
import { ProblemPickerComponent } from "../shared/problem-picker/problem-picker.component";
import { ProblemSearchComponent } from "../problem-search/problem-search.component";
import { TasksComponent } from "../tasks/tasks.component";
import { TaskCreateComponent } from "../task-create/task-create.component";
import { EventCreateComponent } from "../event-create/event-create.component";
import { FavouriteComponent } from "../components/favourite/favourite.component";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    NativeScriptCommonModule,
        CommonModule
  ],
  declarations: [
    NavbarComponent,
    ProblemPickerComponent,
    ProblemSearchComponent
  ],
  exports: [
    NavbarComponent,
    ProblemPickerComponent
  ]
})
export class SharedModule {}