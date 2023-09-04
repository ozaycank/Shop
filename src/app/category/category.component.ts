import { Component } from '@angular/core';
import { Category } from './category'; // Assuming Category is imported correctly

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor() {}
  title = "Category List";
  category: Category[] = [
    { id: 1, name: "Computer" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Tablet" }
  ];
}
