import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import{ FormGroup, Validators, FormControl} from '@angular/forms';
import {ClientesService} from '../../clientes.service';
import {ArticlesService} from '../../articles.service';
import { Article } from 'src/app/article';
import {ActivatedRoute, Router} from '@angular/router';
import { ComprasService } from 'src/app/compras.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsForm: FormGroup;
  dataSource: any;
  suma: any = 10;
  cliente: any;
  count : number[] =[];
  acumulador: number = 0;
  displayedColumns: string[] = ['nombre', 'precio', 'cantidad', 'total'];
  displayedColumnsFacture: string[] = ['subtotal'];
  articuloModel = new Article("", 0);
  arrayArticle : any[] = [];
  constructor(private articlesService :ArticlesService, private router: Router, private activatedRoute: ActivatedRoute, private comprasService: ComprasService, private clientesService: ClientesService) { 
  
  }
 
  ngOnInit() {
    this.articlesService.getArticles().subscribe(response =>{
        console.log(response);
        this.dataSource= response;
        for(let i=0; i<this.dataSource.length; i++){
          this.dataSource[i].precio = Number(this.dataSource[i].precio);
          this.dataSource[i].cantidad = 0;
          this.dataSource[i].total = 0;
        }
        this.clientesService.getCliente(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response=>{
          this.cliente = response;
        })
    })
  }
  mostAmount(i){
    this.dataSource[i].cantidad++;
    this.dataSource[i].total += this.dataSource[i].precio;
    this.acumulador += this.dataSource[i].total;
  }
  minusAmount(i){
    if(this.dataSource[i].cantidad > 0){
      this.dataSource[i].cantidad--;
      this.acumulador -= this.dataSource[i].total;
    }
  }

  submit(){
    let objCompra = {
      idCliente: this.activatedRoute.snapshot.paramMap.get('id'),
      idCompra: null,
      articulos: []
    }
    for(let i = 0; i < this.dataSource.length; i++){
      if(this.dataSource[i].cantidad>0){
        objCompra.articulos.push({
          id: this.dataSource[i].id,
          cantidad: this.dataSource[i].cantidad
        })
      }
    }
    if(objCompra.articulos.length == 0){
      alert('Seleccione como mínimo un artículo') //no me dio tiempo de usar snackbar :(
    }else{
      console.log(objCompra);
      this.comprasService.crearCompra(objCompra).subscribe((responseCompra: any) => {
        if(responseCompra) {
          objCompra.idCompra = responseCompra.resultado
          this.comprasService.crearArticulosCompra(objCompra).subscribe((response: any) => {
            if(response){
              console.log(objCompra.idCompra);
              this.router.navigate([objCompra.idCliente+'/compras/listacompra/'+ objCompra.idCompra  ]);
            }            
          }, (error: any) => {
            console.log(error)
          })
        }
      }, (errorCompra: any) => {
        console.log(errorCompra)
      });
    }
  }
}
