import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css']
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ProductsContainer implements OnInit {

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
