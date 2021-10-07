import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri: string ='';
  constructor(private httpClient: HttpClient) {
    this.uri = environment.url_api;
  }

  getProducts(){
    return this.httpClient.get<Product[]>(`${this.uri}/products/`);
    
  }

  getProduct(id:string){
    return this.httpClient.get<Product>(`${this.uri}/products/${id}`)

  }

  setProduct(product:Product){
    return this.httpClient.post<Product>(`${this.uri}/products`,product);
  }
  
  updateProduct(id: string, changes:Partial<Product>){
    return this.httpClient.put<Product>(`${this.uri}/products/${id}`,changes);
  }

  deleteProduct(id: string){
    return this.httpClient.delete<Boolean>(`${this.uri}/products/${id}`);
  }
}
