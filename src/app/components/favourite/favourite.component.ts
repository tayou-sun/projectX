import { Component, OnInit } from '@angular/core';
import { ArticlesDataService } from '~/app/services/article.data.service';
import { Article } from '~/models/Article';

@Component({
  selector: 'ns-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private dataService: ArticlesDataService) { }
  articles: Article[];
  ngOnInit(): void {
    console.log("articles articles articles articles articles articles")
    this.dataService.get().subscribe((x: Article[]) => {
      this.articles = x.filter(y=>y.isFavorite);
      console.log(this.articles)

    },
      error => {
        /*                     this.router.navigateByUrl("/error");
        */                    /* this.errorService.SetError(error); */
      }
    );

  }
}
