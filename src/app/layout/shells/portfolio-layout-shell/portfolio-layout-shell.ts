import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-portfolio-layout-shell',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './portfolio-layout-shell.html',
  styleUrl: './portfolio-layout-shell.css',
})
export class PortfolioLayoutShell implements OnInit {

  private currentPath = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe((event: any) => {

      const newPath = event.urlAfterRedirects.split('#')[0];

      if (this.currentPath !== newPath) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        this.currentPath = newPath;
      }
    });
  }

  ngOnInit() {
    this.currentPath = this.router.url.split('#')[0];
  }
}
