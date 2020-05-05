import { Component, OnInit } from '@angular/core';
import { Article } from '~/app/core/models/article';
import { ArticlesDataService } from '~/app/core/services/article.data.service';

@Component({
  selector: 'ns-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private dataService: ArticlesDataService) { }
  articles: Article[];
  ngOnInit(): void {
    this.dataService.get().subscribe((x: Article[]) => {
      this.articles = x.filter(y=>y.isFavorite);

    },
      error => {
      }
    );

  }
}
