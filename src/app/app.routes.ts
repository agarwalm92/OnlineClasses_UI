import { Routes } from '@angular/router';
import { Home } from './components/core/home/home';
import { Aboutus } from './components/core/aboutus/aboutus';
import { Category } from './components/category/category';
import { Pricingplan } from './components/pricingplan/pricingplan';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'course/category', component: Category },
  { path: 'pricingplan', component: Pricingplan },
];
