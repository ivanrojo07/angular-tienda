import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss'],
})

export class ProductComponent{

    @Input() product: Product = {
        id: '',
        image: '',
        description: '',
        price: 0,
        title: ''

    };

    @Output() productClicked= new EventEmitter<Product>();

    constructor(private productsService:ProductsService){
        console.log('constructor')
    }

    today = new Date();
    // ngOnChanges(changes: SimpleChange){
    //     console.log('onChanges', changes)
    // }

    // ngOnInit(){
    //     console.log('onInit')
    // }

    // ngDoCheck(){
    //     console.log('doCheck')
    // }

    // ngOnDestroy(){
    //     console.log('onDestroy')
    // }

    addCart(){
        console.log('añadir al carrito', this.product.id)
        this.productClicked.emit(this.product)
    }
    deleteProduct(){
        this.productsService.deleteProduct(this.product.id).subscribe(response=>{
            console.log(response);
        })
    }
}