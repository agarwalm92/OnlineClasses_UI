import { Component } from '@angular/core';
import { categoryModel } from '../../model/categoryModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  categories: categoryModel[] = []; // category is the type of Model array and its blank

  constructor() {
    this.categories = [
      {
        categoryId: 1,
        categoryName: 'Hello',
        description: 'Yellow',
      },
      {
        categoryId: 2,
        categoryName: 'Mango',
        description: 'Vango',
      },
      {
        categoryId: 3,
        categoryName: 'Tuti',
        description: 'Futi',
      },
      {
        categoryId: 4,
        categoryName: 'Kalu',
        description: 'Bhalu',
      },
    ];
  }
}
