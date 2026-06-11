import { NgTemplateOutlet, CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-hackathons-section',
  imports: [CommonModule, RouterLink, NgTemplateOutlet],
  templateUrl: './hackathons-section.html',
  styleUrl: './hackathons-section.css',
})
export class HackathonsSection implements OnInit, AfterViewInit {

  isDesktop = signal(false);

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const isNowDesktop = window.innerWidth >= 768;
    const wasDesktop = this.isDesktop();

    this.isDesktop.set(isNowDesktop);

    if (wasDesktop && !isNowDesktop) {
      setTimeout(() => this.iniciarCarrossel(), 0);
    }
  }

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
