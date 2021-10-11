import { Component, HostListener, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  $total!: Observable<number>;
  installEvent!: Event ;
  constructor(
    private cartService: CartService
  ) { 
    this.$total = this.cartService.$cart.pipe(
      map(products=>products.length)
    )
  }

  ngOnInit(): void {
  }
  @HostListener('window:beforeinstallprompt',['$event'])
  onBeforeInstallPrompt(event: Event){
    console.log(event)
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(){
    if(this.installEvent){
      (this.installEvent as any).prompt()
    }
  }

}
