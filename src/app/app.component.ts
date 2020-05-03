import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(public router: Router){

    }
    chooseCity(event){
        this.router.navigateByUrl("/calendar");
    }
    
    openArticles(event){
        this.router.navigateByUrl("/articles");  
    }
 }
