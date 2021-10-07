import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id:'',
    description:'',
    image: '',
    price: 0,
    title: ''
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {

   }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      let id = params.id
      this.fetchProduct(id);
    })
  }
  fetchProduct(id:string){
    this.productService.getProduct(id).subscribe(product=>{
      this.product = product
    });
  }

}
