import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProblemSearchComponent } from '~/app/problem-search/problem-search.component';
import { ModalDialogOptions, ModalDialogService, RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import {
  getBoolean,
  setBoolean,
  getNumber,
  setNumber,
  getString,
  setString,
  hasKey,
  remove,
  clear
} from "tns-core-modules/application-settings";
import * as app from "tns-core-modules/application";

import { Router } from '@angular/router';
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
  private _overlayGridLayout: GridLayout;

  constructor(
    private dataService: ProblemsDataService, 
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private page: Page,
  private router: RouterExtensions) {
    this._overlayGridLayout = this.page.getViewById('overlayGridLayout')
  }

  problems: Problem[] = [];

  ngOnInit(): void {
    /*  this.dataService.get().subscribe((problems: Problem[])=>{
       console.log(this.problems)
       this.problems = problems;
     }) */
  }

  

  onDrawerButtonTap(){
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

        /* 	if (result.isFrom) {
            this.fromAirport = result.airport.name;
          } else {
            this.toAirport = result.airport.name;
          } */
      });
  }

  public  saveUserInfo() {
    setString("userId", "smth");
    this.router.navigate(['articles'], { clearHistory: true });
    //this.router.navigateByUrl("/articles")
  }
}
