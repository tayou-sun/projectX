import { Component, OnInit } from '@angular/core';
import { ShapeEnum, AndroidData } from 'nativescript-ng-shadow';
import * as utilsModule from "tns-core-modules/utils/utils";
import { Page } from 'tns-core-modules/ui/page/page';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Article } from '../core/models/article';
import { ArticlesDataService } from '../core/services/article.data.service';

 
@Component({
  selector: 'ns-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private dataService: ArticlesDataService ) { }

  public addFavourite(event){
    this.dataService.postFavourite(event).subscribe(_=>{
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();

}

  openLink(event){
    utilsModule.openUrl(event);
  }

  articles: Article[];
  fabShadow: AndroidData = {
    elevation: 6,
    bgcolor: '#ff1744',
    shape: ShapeEnum.OVAL,
  };
  ngOnInit(): void {
    console.log("articles articles articles articles articles articles")
    this.dataService.get().subscribe((x: Article[]) => {
        this.articles = x;
        console.log( this.articles)
        
    },
      error => {
        /*                     this.router.navigateByUrl("/error");
        */                    /* this.errorService.SetError(error); */
      }
    );
  }
}

