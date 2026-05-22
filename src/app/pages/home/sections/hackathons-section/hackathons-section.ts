import { NgTemplateOutlet, NgComponentOutlet } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-hackathons-section',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './hackathons-section.html',
  styleUrl: './hackathons-section.css',
})
export class HackathonsSection implements AfterViewInit {

  ngAfterViewInit(): void {
    this.iniciarCarrossel();
  }

  iniciarCarrossel(): void {
    const carouselElement = document.getElementById('hackathonsCarousel');

    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 6000,
        touch: true,
        ride: 'carousel'
      });

      carousel.cycle();
    }
  }
}
