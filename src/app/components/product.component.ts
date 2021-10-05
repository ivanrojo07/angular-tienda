import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
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

    addCart(){
        console.log('añadir al carrito', this.product.id)
        this.productClicked.emit(this.product)
    }
}