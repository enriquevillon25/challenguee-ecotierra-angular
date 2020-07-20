import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  /* getArticles(){
    return this.http.get(`${this.baseUrl}/getAllArticulo.php`)
  }
  getArticle(id: string | number) {
    return this.http.get(`${this.baseUrl}/getArticulo.php?idArticulo=${id}`);
  } */
  crearCompra(objCompra: any) {
    console.log(objCompra)
    return this.http.post(`${this.baseUrl}/postCompra.php`,objCompra);
  }
  crearArticulosCompra(objArticulosCompra: any) {
    return this.http.post(`${this.baseUrl}/postArticuloCompra.php`,objArticulosCompra);
  }
  getCompra(id: string | number){
    return this.http.get(`${this.baseUrl}/getCompra.php?idCompra=${id}`);
  }
  getCompras(id: string | number){
    return this.http.get(`${this.baseUrl}/getAllCompra.php?idCliente=${id}`)
  }
}
