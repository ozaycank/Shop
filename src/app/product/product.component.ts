import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  template: `<p>{{name}}</p>`,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  constructor(){}
  title="Product List"
  filterText = ""
  products :Product[] = [{id:1,name:"Laptop",price:10000,categoryId:1,description:"Lenovo Legion",imageUrl:""},{id:2,name:"Camera",price:2000,categoryId:2,description:"A4 Tech",imageUrl:""}]
}
  addToCart(product){
  alertify.success(product.name +"Added to Cart!")
}

function addToCart() {
  throw new Error('Function not implemented.');
}
