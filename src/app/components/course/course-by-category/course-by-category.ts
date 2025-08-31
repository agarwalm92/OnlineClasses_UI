import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryModel } from '../../../model/categoryModel';

@Component({
  selector: 'app-course-by-category',
  imports: [],
  templateUrl: './course-by-category.html',
  styleUrl: './course-by-category.css',
})
export class CourseByCategory implements OnInit {
  categoryId: Number = 0;
  categories: categoryModel[] = []; // category is the type of Model array and its blank
  category: categoryModel | null = null; //make object of CategoryModel

  constructor(private route: ActivatedRoute) {
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
    console.log(this.categories);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = Number(params.get('categoryId'));
      this.category = this.categories.find((x) => x.categoryId === this.categoryId) || null;
      console.log(this.category);
    });
  }
}
