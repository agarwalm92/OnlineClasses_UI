import { Routes } from '@angular/router';
import { Home } from './components/core/home/home';
import { Aboutus } from './components/core/aboutus/aboutus';
import { Category } from './components/course/category/category';
import { BrowseCourse } from './components/course/browse-course/browse-course';
import { CourseByCategory } from './components/course/course-by-category/course-by-category';
import { Pricingplan } from './components/pricingplan/pricingplan';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'course/category', component: Category },
  { path: 'course/browse', component: BrowseCourse },
  { path: 'course/category/:categoryId', component: CourseByCategory },
  { path: 'pricingplan', component: Pricingplan },
];
