import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CvSection } from "./sections/cv-section/cv-section";
import { BioSection } from "./sections/bio-section/bio-section";
import { SkillsSection } from './sections/skills-section/skills-section';
import { CertificatesSection } from './sections/certificates-section/certificates-section';

@Component({
  selector: 'app-about',
  imports: [BioSection, SkillsSection, CvSection, CertificatesSection],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

  // Injetamos os serviços Title e Meta
  constructor(private titleService: Title, private metaService: Meta) { }



  ngOnInit(): void {
    // 1. Muda a tag <title> lá no topo do navegador
    this.titleService.setTitle('Sobre o Pablo | Desenvolvedor Fullstack');

    // 2. Atualiza (ou cria) as tags Open Graph dinamicamente
    this.metaService.updateTag({ property: 'og:title', content: 'Página Sobre - Pablo Hoties' });
    this.metaService.updateTag({ property: 'og:description', content: 'Esta é a página sobre mim. Atualizada via JavaScript (Angular)!' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://lol-vic-peninsula-granted.trycloudflare.com/about' });

    // Opcional: Você pode apontar para uma imagem diferente para ver se muda
    this.metaService.updateTag({ property: 'og:image', content: 'https://lol-vic-peninsula-granted.trycloudflare.com/assets/teste2.png' });
  }


}
