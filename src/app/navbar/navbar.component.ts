import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Page } from 'tns-core-modules/ui/page/page';
import * as app from "tns-core-modules/application";

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ns-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() needActionItem: boolean;
  
  faBars = faBars;
  constructor(private page: Page) {}

  ngOnInit(): void {
      this.page.actionBarHidden = false;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();

}
}
