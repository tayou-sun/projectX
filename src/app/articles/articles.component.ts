import { Component, OnInit } from '@angular/core';
import { ArticlesDataService } from './article.data.service';
import { Article } from '~/models/Article';
import { ShapeEnum, AndroidData } from 'nativescript-ng-shadow';
import * as utilsModule from "tns-core-modules/utils/utils";

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
    this.dataService.get().subscribe((x: Article[]) => {
        this.articles = x;
        
    },
      error => {
        /*                     this.router.navigateByUrl("/error");
        */                    /* this.errorService.SetError(error); */
      }
    );
  }
}

