import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../clientes.service';
import { Cliente } from "../../cliente";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class clienteComponent implements OnInit {
  cptCliente:any;
  clienteModel = new Cliente("", "", 0, 0);
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'fecha', 'comprar','ver']
  dataSource : any;
  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(response=>{
      this.dataSource = response;
      console.log(this.dataSource);
    })
  }
  redirectShop(i){
    this.router.navigate([this.dataSource[i].id + '/compras']);
  }
  redirectListShop(i){
    this.router.navigate([this.dataSource[i].id+'/compras/listacompra'])
  }
}
