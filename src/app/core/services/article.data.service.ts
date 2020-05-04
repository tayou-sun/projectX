import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class ArticlesDataService {

    private url = 'https://palliative.azurewebsites.net/api';

    constructor(private http: HttpClient) {}

    get() {
        return this.http.get(this.url + "/Articles");
    }

    postFavourite(id: number){
        return this.http.post(this.url+"/FavoriteArticles", {id: id});
    }
}
