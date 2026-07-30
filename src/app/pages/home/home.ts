import { Component } from '@angular/core';
import { HeroSection } from "./sections/hero-section/hero-section";
import { HackathonsSection } from "./sections/hackathons-section/hackathons-section";
import { AutoilustratopSection } from "./sections/autoilustratop-section/autoilustratop-section";
import { ContactSection } from "./sections/contact-section/contact-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, HackathonsSection, AutoilustratopSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
