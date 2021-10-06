import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes:Routes = [
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'', component:LayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)},
    {path:'contact', loadChildren: ()=>import('./contact/contact.module').then(m=>m.ContactModule), canActivate:[AdminGuard]},
    {path:'products', loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule).catch(error=>console.log(error))},
    {path:'**', component:PageNotFoundComponent}
  ]},
  
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
