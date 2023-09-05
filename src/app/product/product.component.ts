import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  template: `<p>{{ name }}</p>`,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private  alertifyService:AlertifyService) {}
  title = "Product List";
  filterText = "";
  products: Product[] = [
    { id: 1, name: "Laptop", price: 10000, categoryId: 1, description: "Lenovo Legion", imageUrl: "" },
    { id: 2, name: "Camera", price: 2000, categoryId: 2, description: "A4 Tech", imageUrl: "" }
  ];

  addToCart(product: Product) {
    this.alertifyService.success(product.name  +"added")
  }
}
