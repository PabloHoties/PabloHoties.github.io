import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  imports: [],
  templateUrl: './cv-section.html',
  styleUrl: './cv-section.css',
})
export class CvSection implements OnInit {

  isFirefoxMobile: boolean = false;

  ngOnInit(): void {
    this.verificarNavegador();
  }

  private verificarNavegador() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('firefox') && (userAgent.includes('mobi') || userAgent.includes('android'))) {
      this.isFirefoxMobile = true;
    }
  }
}
