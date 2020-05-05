import { Component, OnInit } from '@angular/core';
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
import { RouterExtensions } from 'nativescript-angular';
@Component({
  selector: 'ns-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.css']
})
export class NavbarListComponent {

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
  favourite(event){
      this.router.navigate(["favourite"], { clearHistory: true }); 
  }

  dayBookClick(event){
      this.router.navigate(["day-book"], { clearHistory: true }); 
  }

}