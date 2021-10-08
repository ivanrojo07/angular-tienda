import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements AfterViewInit {

  productsSource: Product[] = [];
  displayedColumns: string[] = [];
  constructor(private productsService: ProductsService) {
    this.displayedColumns = ['index', 'title', 'price', 'description', 'actions'];
  }

  ngAfterViewInit(): void {
    this.getProducts();
   
  }

  getProducts(){
    this.productsService.getProducts().subscribe(products=>{
      this.productsSource = products
    });
  }

  deleteProduct(id:string){
    this.productsService.deleteProduct(id).subscribe(result=>{
      if(result){
        this.getProducts()
      }
    })
  }

}
