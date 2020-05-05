import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/common';
import { Page } from 'tns-core-modules/ui/page/page';
import { ProblemSearchComponent } from '../problem-search/problem-search.component';

@Component({
  selector: 'ns-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
  entryComponents: [ProblemSearchComponent]
})
export class EventCreateComponent implements OnInit {

  constructor(private _modalService: ModalDialogService,
		private _vcRef: ViewContainerRef,
		private page: Page) { }

  ngOnInit(): void {
  }

  onOpenSearchAirportTap(isFrom: boolean): void {
		const options: ModalDialogOptions = {
			viewContainerRef: this._vcRef,
			context: { isFrom },
			fullscreen: true
		};

		this._modalService.showModal(ProblemSearchComponent, options)
			.then((result: any) => {
        debugger
				var a = 1;
			});
	}
}
