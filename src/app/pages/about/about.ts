import { Component } from '@angular/core';
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
export class About {

}
