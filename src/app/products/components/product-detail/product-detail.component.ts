import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import { switchMap } from 'rxjs/operators';
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
    this.route.params.pipe(
      switchMap((params:Params)=>{
        return this.productService.getProduct(params.id)
      })
    ).subscribe((product)=>{
      this.product = product
    })
  }
}
