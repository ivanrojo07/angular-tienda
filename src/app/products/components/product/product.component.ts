import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
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

    constructor(private cartService:CartService){
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
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product)
    }
}