import { Component } from "@angular/core";
import {Router} from '@angular/router';
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
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(public router: RouterExtensions){

    }
    chooseCity(event){
        this.router.navigate(["calendar"], { clearHistory: true });
    }

    chooseTasks(event){
        this.router.navigate(["tasks"], { clearHistory: true });
        console.log('task clicked');
    }
    
    openArticles(event){
        this.router.navigate(["articles"], { clearHistory: true });  
    }
    clearUser(event){
        clear();
        this.router.navigate(["home"], { clearHistory: true });  

    }


 }
