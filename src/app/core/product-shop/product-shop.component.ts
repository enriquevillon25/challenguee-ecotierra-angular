import { Component, OnInit } from '@angular/core';
import {ComprasService} from '../../compras.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.scss']
})
export class ProductShopComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['nombre', 'cantidad','precio', 'subtotal','igv', 'total'];

  constructor(private comprasService: ComprasService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.comprasService.getCompra(this.activedRoute.snapshot.paramMap.get('id')).subscribe(response =>{
      this.dataSource = response;
      console.log(this.dataSource);
    })
  }

} 
