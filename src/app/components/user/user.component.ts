import { Component, OnInit, ViewContainerRef, ElementRef, ViewChild } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular';
import { Page, Color } from 'tns-core-modules/ui/page/page';
import { action } from "tns-core-modules/ui/dialogs";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fio: string = "";
  age: number;
  gender: string = "";
  genders = ["женский", "мужской"];
   colorShortHex = new Color("#F0C");
  constructor(private _modalService: ModalDialogService,
		private _vcRef: ViewContainerRef,
    private page: Page,
    private router: Router) { }

  ngOnInit(): void {
  }

  public typeOfService: string = '';
	onTypeServiceTap(): void {
		let options = {
			title: "Пол",
			cancelButtonText: "Отмена",
			actions: ["мужской", "женский"]
		};

		action(options).then((result) => {
			this.typeOfService = (result == 'Отмена') ? this.typeOfService : result;
		});
  }
  
  public getProblems(){
    this.router.navigateByUrl("/problems")
  }

} 
