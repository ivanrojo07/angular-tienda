import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';


interface User {
  email:string;
  gender: string;
  phone: string;
}

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

  getRandomUsers(): Observable<User[]>{
    return this.httpClient.get('https://randomuser.me/api/?results=2')
      .pipe(
        map((response: any)=>{
          return response.results as User[];
        }));
  }
}
