import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RouterExtensions } from "nativescript-angular/router";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { ProblemPickerComponent } from "../shared/problem-picker/problem-picker.component";
import { ProblemSearchComponent } from "../components/problem-search/problem-search.component";
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