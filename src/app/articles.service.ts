import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getArticles(){
    return this.http.get(`${this.baseUrl}/getAllArticulo.php`)
  }
  getArticle(id: string | number) {
    return this.http.get(`${this.baseUrl}/getArticulo.php?idArticulo=${id}`);
  }
  addArticule(article: Article) {
    return this.http.post(`${this.baseUrl}/postArticulo.php`, article);
  }

}
