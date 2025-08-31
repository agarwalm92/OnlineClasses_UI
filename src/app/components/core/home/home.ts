import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Pricingplan } from '../../pricingplan/pricingplan';
import { Category } from '../../course/category/category';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, Pricingplan, Category],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
