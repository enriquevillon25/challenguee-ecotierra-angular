import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { clienteComponent} from './user/cliente/cliente.component';
const routes: Routes = [
  {path: "", redirectTo: 'user', pathMatch:'full'},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m=>m.UserModule),data: {preload:false}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
