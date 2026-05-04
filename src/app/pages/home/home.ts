import { Component } from '@angular/core';
import { HeroSection } from "./sections/hero-section/hero-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
