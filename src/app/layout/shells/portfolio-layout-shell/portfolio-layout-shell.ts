import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-portfolio-layout-shell',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './portfolio-layout-shell.html',
  styleUrl: './portfolio-layout-shell.css',
})
export class PortfolioLayoutShell {

}
