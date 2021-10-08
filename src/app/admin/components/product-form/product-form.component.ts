import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  id:string = '';
  productForm = this.fb.group({
    id: null,
    image: [null, Validators.required],
    title: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private productsService: ProductsService,private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit():void{
    this.route.params.subscribe((params:Params)=>{
      if(params.id){
        this.id = params.id
        this.fetchProduct(this.id);        
      }
      else{
        this.id = ""
      }
    })
  }

  onSubmit(): void {
    if(this.productForm.valid){
      // console.log(this.productForm.value)
      if(this.id){
        this.productsService.updateProduct(this.id,this.productForm.value).subscribe(product=>{
          console.log(product)
          this.router.navigateByUrl('/admin/products-table');
        })
      }
      else{
        this.productsService.setProduct(this.productForm.value).subscribe(product=>{
          console.log(product)
          this.router.navigateByUrl('/admin/products-table');
        })

      }
    }
    
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id).subscribe(product=>{
      console.log(product)
      this.productForm.setValue(product)
    })
  }
}
