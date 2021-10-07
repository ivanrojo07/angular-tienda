import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.fb.group({
    id: null,
    image: [null, Validators.required],
    title: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private productsService: ProductsService) {}

  onSubmit(): void {
    alert('Thanks!');
    // console.log(this.productForm.value)
    this.productsService.setProduct(this.productForm.value).subscribe(product=>{
      console.log(product)
    })
  }
}
