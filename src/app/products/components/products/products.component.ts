import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //  
  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
    
    
  }

  clickProduct(product:Product){
    console.log('product', product)
  }

  fetchProducts(){
    this.productService.getProducts().subscribe(products=>{
      this.products = products
    })
  }

}
