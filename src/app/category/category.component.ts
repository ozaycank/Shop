import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(){}
  title="Category List"
  categories: Category[] =  [{id:1,  name:"Computer"  },{id:2,  name:"Mouse"  },{id:3,  name:"Tablet"  }]

}
