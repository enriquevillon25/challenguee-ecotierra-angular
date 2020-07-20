import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {clienteComponent} from './cliente/cliente.component';
import { RegisterComponent} from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

const userRoutes: Routes = [
  {
    path: "", redirectTo:"/registrate", pathMatch: "full"
  },
  {
    path: 'registrate', component: RegisterComponent,

  },
  {
    path: 'clientes', component : clienteComponent,
  }
]
@NgModule({
  declarations: [clienteComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    SharedModule,
    CoreModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class UserModule { }
