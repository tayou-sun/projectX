import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '~/models/Article';
@Injectable()

export class ProblemsDataService {

    private url = 'https://palliative.azurewebsites.net/api';

    constructor(private http: HttpClient) {}

    get() {
        return this.http.get(this.url + "/Problems");
    }

   /*  postFavourite(id: number){
        return this.http.post(this.url+"/FavoriteArticles", {id: id});
    } */
}
