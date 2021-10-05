import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
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
      let product = this.productService.getProduct(id);
      if(product){
        this.product = product;
      }
      console.log(this.product)
    })
  }

}
