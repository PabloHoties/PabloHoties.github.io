import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  isScrolled = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.resetNavbar();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  onLogoClick() {
    if (this.router.url === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  resetNavbar() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');

      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.classList.add('collapsed');
        toggler.setAttribute('aria-expanded', 'false');
      }
    }

    const openDropdowns = document.querySelectorAll('.dropdown-menu.show, .submenu-lateral.show');
    openDropdowns.forEach(dropdown => dropdown.classList.remove('show'));
  }
}
