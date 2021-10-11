import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  $product!: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {

   }

  ngOnInit(): void {
    this.$product = this.route.params.pipe(
      switchMap((params:Params)=>{
        return this.productService.getProduct(params.id)
      })
    );
    this.getRandomUsers();
  }

  getRandomUsers(){
    this.productService.getRandomUsers().subscribe(users=>{
      console.log(users)
    })
  }
}
