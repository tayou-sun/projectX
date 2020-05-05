import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProblemSearchComponent } from '~/app/components/problem-search/problem-search.component';
import { ModalDialogOptions, ModalDialogService, RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import {
  setString
 
} from "tns-core-modules/application-settings";
import * as app from "tns-core-modules/application";

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Problem } from '~/app/core/models/problem';
import { ProblemsDataService } from '~/app/core/services/problem.data.service';
@Component({
  selector: 'ns-problem-picker',
  templateUrl: './problem-picker.component.html',
  styleUrls: ['./problem-picker.component.css'],
  entryComponents: [ProblemSearchComponent]
})
export class ProblemPickerComponent implements OnInit {

  constructor(
    private dataService: ProblemsDataService,
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private page: Page,
    private router: RouterExtensions) {
  }

  problems: Problem[] = [];

  ngOnInit(): void {
  }

  onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
  public onOpenSearchAirportTap(isFrom: boolean): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: { isFrom },
      fullscreen: true
    };

    this._modalService.showModal(ProblemSearchComponent, options)
      .then((result: any) => {
        this.problems.push(result.problem)
      });
  }

  public saveUserInfo() {
    setString("userId", "smth");
    this.router.navigate(['articles'], { clearHistory: true });
  }
}
