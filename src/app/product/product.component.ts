import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<p>{{name}}</p>`,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title="Product List"
  products :any[] = [{id:1,name:"Laptop",price:10000,categoryId:1,description:"Lenovo Legion"},{id:2,name:"Camera",price:2000,categoryId:2,description:"A4 Tech"}]
}
