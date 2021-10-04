import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tienda';
  items = ['sueter',"playera",'pantalon','camisa'];

  addItem(){
    this.items.push(this.title)
  }
  removeItem(index:number){
    this.items.splice(index,1);
  }

}
