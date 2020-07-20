import { Component, OnInit } from '@angular/core';
import{ FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientesService} from '../../clientes.service';
import {Cliente} from '../../cliente';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  status: boolean = true;
  clienteModel = new Cliente("", "", undefined,undefined)
  constructor(private router: Router, private clientesService:ClientesService) { 
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required), 
      age: new FormControl('', Validators.required), 
      date: new FormControl('', [Validators.required]), 
    });
  }
  ngOnInit() {
 
  }
  
  onSubmit() {
    this.clientesService.addCliente(this.clienteModel).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
