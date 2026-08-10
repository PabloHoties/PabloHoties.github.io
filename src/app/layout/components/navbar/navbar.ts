import { Component, HostListener } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isScrolled = false;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
      this.resetNavbar();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
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

  onNavClick(event: MouseEvent, path: string, fragmentId?: string) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) {
      return;
    }

    this.resetNavbar();

    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === path) {
      if (fragmentId) {
        setTimeout(() => this.scrollToElement(fragmentId), 10);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (fragmentId) {
        setTimeout(() => {
          this.scrollToElement(fragmentId);
        }, 100);
      }
    }
  }

  private scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 57;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
