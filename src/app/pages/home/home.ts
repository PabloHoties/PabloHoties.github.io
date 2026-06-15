import { Component } from '@angular/core';
import { HeroSection } from "./sections/hero-section/hero-section";
import { HackathonsSection } from "./sections/hackathons-section/hackathons-section";
import { AutoilustratopSection } from "./sections/autoilustratop-section/autoilustratop-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, HackathonsSection, AutoilustratopSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
