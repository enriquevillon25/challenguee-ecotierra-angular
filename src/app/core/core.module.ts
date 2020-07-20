import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShopComponent} from './product-shop/product-shop.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
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
import {Routes, RouterModule } from '@angular/router';
import { ProductShopListComponent } from './product-shop-list/product-shop-list.component';
import {SharedModule} from '../shared/shared.module';
const userRoutes: Routes = [
  {
    path: ':id/compras', component: ProductListComponent,
  },
  {
    path:':id/compras/listacompra', component: ProductShopListComponent,
  },
  {
    path: ':id/compras/listacompra/:id', component: ProductShopComponent,
  },
]
@NgModule({
  declarations: [ProductListComponent, ProductShopComponent, ProductShopListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule,
  ],
  exports:[
    ProductListComponent, ProductShopComponent, ProductShopListComponent,
  ]
})
export class CoreModule { }
