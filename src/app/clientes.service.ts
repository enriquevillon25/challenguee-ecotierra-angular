  import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Cliente} from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getClientes(){
    return this.http.get(`${this.baseUrl}/getAll.php`)
  }

  getCliente(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idCliente=${id}`);
  }


  addCliente(cliente: Cliente) {
    return this.http.post(`${this.baseUrl}/post.php`, cliente);
  }

  // deleteCliente(cliente: Cliente) {
  //   return this.http.delete(`${this.baseUrl}/delete.php?idCliente=${cliente.id}`);
  // }

  updateCliente(cliente: Cliente) {
    return this.http.put(`${this.baseUrl}/update.php`, cliente);
  }
}
