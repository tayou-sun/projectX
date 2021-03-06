import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isAndroid } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";

class DataItem {
	constructor(public name: string) {
	}
}

@Component({
  selector: 'ns-problem-search',
  templateUrl: './problem-search.component.html',
  styleUrls: ['./problem-search.component.css']
})
export class ProblemSearchComponent implements OnInit {

  private _searchedText: string = '';
	private arrayAirports: Array<DataItem> = [];
	public airports: ObservableArray<DataItem> = new ObservableArray<DataItem>();
	public isFrom: boolean = false;

	constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {
		this.arrayAirports.push(new DataItem("1"));
		this.arrayAirports.push(new DataItem("2"));
		this.arrayAirports.push(new DataItem("3"));
		this.arrayAirports.push(new DataItem("4"));
		this.arrayAirports.push(new DataItem("5"));
		this.arrayAirports.push(new DataItem("6"));
		this.arrayAirports.push(new DataItem("7"));
		this.arrayAirports.push(new DataItem("8"));
		this.arrayAirports.push(new DataItem("7"));

		this.airports = new ObservableArray<DataItem>(this.arrayAirports);

		this.isFrom = this._params.context.isFrom;
	}

	ngOnInit() {
	}

	onClose(): void {
		this._params.closeCallback("return value");
	}

	onSelectItem(args) {
		let airport = (this._searchedText !== "") ? this.airports.getItem(args.index) : this.arrayAirports[args.index];
		this._params.closeCallback({
			isFrom: this.isFrom,
			airport
		});
	}

	public onSubmit(args) {
		let searchBar = <SearchBar>args.object;
		let searchValue = searchBar.text.toLowerCase();
		this._searchedText = searchValue;

		this.airports = new ObservableArray<DataItem>();
		if (searchValue !== "") {
			for (let i = 0; i < this.arrayAirports.length; i++) {
				if (this.arrayAirports[i].name.toLowerCase().indexOf(searchValue) !== -1) {
					this.airports.push(this.arrayAirports[i]);
				}
			}
		}
	}

	public searchBarLoaded(args) {
		let searchBar = <SearchBar>args.object;
		searchBar.dismissSoftInput();

		if (isAndroid) {
			searchBar.android.clearFocus();
		}

		searchBar.text = "";
	}

	public onClear(args) {
		let searchBar = <SearchBar>args.object;
		searchBar.text = "";
		searchBar.hint = "Search for a airport";

		this.airports = new ObservableArray<DataItem>();
		this.arrayAirports.forEach(item => {
			this.airports.push(item);
		});
	}

	public onTextChanged(args) {
		this.onSubmit(args);
	}

}
