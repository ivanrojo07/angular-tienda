import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
  id:string = '';
  image_url$!: Observable<string>;
  productForm = this.fb.group({
    id: null,
    image: [null, Validators.required],
    title: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private productsService: ProductsService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private storage: AngularFireStorage
    ) {
    
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

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const dir = 'images';
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir,files[0]);
    
    task.snapshotChanges().pipe(finalize(()=> {
      // console.log(fileRef.delete())
      this.image_url$ = fileRef.getDownloadURL();

      this.image_url$.subscribe(url=>{
        this.productForm.get('image')?.setValue(url);
      })
    })).subscribe()
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id).subscribe(product=>{
      console.log(product)
      this.productForm.setValue(product)
    })
  }
}
