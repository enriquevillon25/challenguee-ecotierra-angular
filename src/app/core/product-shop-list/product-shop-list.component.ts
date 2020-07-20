import { Component, OnInit } from '@angular/core';
import {ComprasService} from '../../compras.service';
import {ClientesService} from '../../clientes.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-shop-list',
  templateUrl: './product-shop-list.component.html',
  styleUrls: ['./product-shop-list.component.scss']
})
export class ProductShopListComponent implements OnInit {

  dataSource: any;
  cliente: any;
  displayedColumns: string[] = ['nombre', 'cantidad','precio', 'subtotal','igv', 'total', 'detalle'];
  constructor(private comprasService: ComprasService, private activedRoute: ActivatedRoute, private router: Router, private clientesService: ClientesService) { }

  ngOnInit() {
    console.log(this.activedRoute.snapshot.paramMap.get('id'));

    this.comprasService.getCompras(this.activedRoute.snapshot.paramMap.get('id')).subscribe(response =>{
      console.log(response);
      this.dataSource = response;
      this.clientesService.getCliente(this.activedRoute.snapshot.paramMap.get('id')).subscribe(response =>{
          this.cliente= response;
      })
    })
  }
  redirectDetail(i){
    this.router.navigate([this.activedRoute.snapshot.paramMap.get('id') + '/compras/listacompra/' + this.dataSource[i].idCompra]);
  }
}
