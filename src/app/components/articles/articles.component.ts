import { Component, OnInit } from '@angular/core';
import * as utilsModule from "tns-core-modules/utils/utils";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Article } from '../../core/models/article';
import { ArticlesDataService } from '../../core/services/article.data.service';

@Component({
  selector: 'ns-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private dataService: ArticlesDataService) { }

  public addFavorite(event) {
    this.dataService.postFavorite(event).subscribe(_ => {
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();

  }

  openLink(event) {
    utilsModule.openUrl(event);
  }

  articles: Article[];

  ngOnInit(): void {
    this.dataService.get().subscribe((x: Article[]) => {
      this.articles = x;
    },
      error => {}
    );
  }
}

