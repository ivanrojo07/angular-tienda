import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
const routes: Routes = [
  {path:'', component:NavComponent, children:[
    {path:'',component:DashboardComponent},
    {path:'products-table', component:ProductsTableComponent},
    {path:'create', component: ProductFormComponent},
    {path:'edit/:id',component:ProductFormComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
