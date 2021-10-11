import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsContainer } from './containers/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsContainer,
    ProductDetailComponent,
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ],
})
export class ProductsModule { }
