import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/core/home/home';
import { Aboutus } from './components/core/aboutus/aboutus';
import { Navbar } from './components/core/navbar/navbar';
import { Pricingplan } from './components/pricingplan/pricingplan';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Aboutus, Navbar, Pricingplan],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true, // new to angular 16+, if yes no ngmodule is used
})
export class App {
  protected readonly title = signal('OnlineClasses_UI');
}
