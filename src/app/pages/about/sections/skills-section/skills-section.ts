import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  items: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {

  skills: SkillCategory[] = [
    {
      title: 'Angular & Front-end',
      expanded: false,
      items: ['Angular 21', 'Formulários Reativos', 'TypeScript / JavaScript', 'HTML5 & CSS3', 'Bootstrap']
    },
    {
      title: 'Java & Spring',
      expanded: false,
      items: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring MVC & Thymeleaf', 'JUnit 5', 'MockMvc', 'Maven']
    },
    {
      title: 'Arquitetura & APIs',
      expanded: false,
      items: ['Microsserviços', 'RESTful APIs', 'RabbitMQ', 'JWT', 'Swagger', 'Postman']
    },
    {
      title: 'Bancos de Dados',
      expanded: false,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Modelagem de Dados']
    },
    {
      title: 'Engenharia de Software',
      expanded: false,
      items: ['DDD (Domain-driven Design)', 'TDD (Test-driven Development)', 'SOLID', 'Código Limpo', 'Design Patterns', 'Injeção de Dependências']
    },
    {
      title: 'Cloud & DevOps',
      expanded: false,
      items: ['Git & GitHub', 'Docker', 'GitHub Actions', 'Microsoft Azure', 'AWS']
    }
  ];

  toggleExpand(selectedCategory: any): void {
    if (selectedCategory.expanded) {
      selectedCategory.expanded = false;
      return;
    }

    this.skills.forEach(category => {
      category.expanded = false;
    });

    selectedCategory.expanded = true;
  }
}