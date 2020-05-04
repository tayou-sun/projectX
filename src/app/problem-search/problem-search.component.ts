import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isAndroid } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import { Problem } from '../core/models/problem';
import { ProblemsDataService } from '../core/services/problem.data.service';


@Component({
	selector: 'ns-problem-search',
	templateUrl: './problem-search.component.html',
	styleUrls: ['./problem-search.component.css']
})
export class ProblemSearchComponent implements OnInit {

	private _searchedText: string = '';
	private arrayAirports: Array<Problem> = [];
	public base_problems: Array<Problem> = new Array<Problem>();
	public problems: Array<Problem> = new Array<Problem>();
	public isFrom: boolean = false;
	constructor(private _params: ModalDialogParams,
		private _page: Page,
		private router: RouterExtensions,
		private _activeRoute: ActivatedRoute,
		private dataService: ProblemsDataService) {
	}


	ngOnInit() {
		this.dataService.get().subscribe((problems: any) => {
			this.problems = problems
			this.base_problems = problems;
		})
	}

	onClose(): void {
		this._params.closeCallback("return value");
	}

	onSelectItem(args) {


		let problem = (this._searchedText !== "") ? this.problems.find(x => x.title.toUpperCase().includes(this._searchedText.toUpperCase())) : this.problems[args.index];
		//let airport = (this._searchedText !== "") ? this.problems.getItem(args.index) : this.arrayAirports[args.index];
		console.log("_______________________", problem)
		this._params.closeCallback({
			isFrom: true,
			problem: problem
		});
	}

	public onSubmit(args) {
		let searchBar = <SearchBar>args.object;
		let searchValue = searchBar.text.toLowerCase();
		this._searchedText = searchValue;

		this.problems = new Array<Problem>();
		if (searchValue !== "") {
			for (let i = 0; i < this.base_problems.length; i++) {
				if (this.base_problems[i].title.toLowerCase().indexOf(searchValue) !== -1) {
					this.problems.push(this.base_problems[i]);
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
		searchBar.hint = "Найти проблему";

		this.problems = new Array<Problem>();
		this.base_problems.forEach(item => {
			this.problems.push(item);
		});
	}

	public onTextChanged(args) {
		this.onSubmit(args);
	}

}
