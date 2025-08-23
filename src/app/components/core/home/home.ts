import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Pricingplan } from '../../pricingplan/pricingplan';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, Pricingplan],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
