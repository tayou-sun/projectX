import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isIOS } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import * as app from "tns-core-modules/application";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home-component.css"]
})

export class HomeComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }


};
 

