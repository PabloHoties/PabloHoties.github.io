import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';

declare var bootstrap: any;

interface Certificate {
  id: string;
  imageUrl: string;
  altText: string;
}

@Component({
  selector: 'app-certificates-section',
  imports: [CommonModule],
  templateUrl: './certificates-section.html',
  styleUrl: './certificates-section.css',
})
export class CertificatesSection implements AfterViewInit {

  private cdr = inject(ChangeDetectorRef);

  activeIndex = 0;

  certificatesList: Certificate[] = [
    {
      id: 'coti-java',
      imageUrl: 'assets/certificado-coti-informática-java-web-fullstack.webp',
      altText: 'Certificado de Conclusão do Curso Java Web Developer - Formação FullStack'
    },
    {
      id: 'coti-hackathon-giom',
      imageUrl: 'assets/certificado-coti-informática-hackathon-giom.webp',
      altText: 'Certificado do Hackathon Coti Informática + Giom Tecnologia'
    },
    {
      id: 'coti-hackathon-vibetex',
      imageUrl: 'assets/certificado-coti-informática-hackathon-vibetex.webp',
      altText: 'Certificado do Hackathon Coti Informática + Vibetex'
    }
  ];

  ngAfterViewInit(): void {
    this.iniciarCarrossel();
  }

  iniciarCarrossel(): void {
    const carouselElement = document.getElementById('certificatesCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        touch: true,
        ride: 'carousel'
      });

      carouselElement.addEventListener('slide.bs.carousel', (event: any) => {
        this.activeIndex = event.to;
        this.cdr.detectChanges();
      });
    }
  }

  isPrev(index: number): boolean {
    const len = this.certificatesList.length;
    if (len <= 2) return false;
    const prev = this.activeIndex === 0 ? len - 1 : this.activeIndex - 1;
    return index === prev;
  }

  isNext(index: number): boolean {
    const len = this.certificatesList.length;
    if (len <= 1) return false;
    if (len === 2) return index !== this.activeIndex; 
    const next = this.activeIndex === len - 1 ? 0 : this.activeIndex + 1;
    return index === next;
  }
}