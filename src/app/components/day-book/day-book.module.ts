import { DayBookComponent } from "./day-book.component";
import { NgModule } from "@angular/core";
import { DayBookRoutingModule } from "./day-book-routing.module";
import { SharedModule } from "~/app/shared/shared.module";
import { PollListComponent } from './poll-list/poll-list.component';
import { DayBookDataService } from "./day-book.data.service";
import { DayBookResolver } from "./day-book-resolver.service";
import { CommonModule } from "@angular/common";
import { CoreModule } from "~/app/core/core.module";
import { NativeScriptCommonModule } from "nativescript-angular";
import { HomeRoutingModule } from "~/app/home/home-routing.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular/gauges-directives";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular/calendar-directives";

@NgModule({

    imports: [
        DayBookRoutingModule,
        SharedModule,
        CommonModule,
        CoreModule,
        NativeScriptCommonModule
        
    ],

    declarations: [
        DayBookComponent,
        PollListComponent
    ],
    providers: [
        DayBookDataService,
        DayBookResolver
    ]

})
export class DayBookModule { }
