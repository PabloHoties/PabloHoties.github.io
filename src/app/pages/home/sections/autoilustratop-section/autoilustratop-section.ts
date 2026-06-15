import { afterNextRender, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autoilustratop-section',
  imports: [RouterLink],
  templateUrl: './autoilustratop-section.html',
  styleUrl: './autoilustratop-section.css',
})
export class AutoilustratopSection implements OnDestroy {

  @ViewChild('contadorVisitas') contadorVisitas!: ElementRef;

  visualizacoesFormatadas: string = '1,0';
  private observer!: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
    afterNextRender(() => {
      this.configurarObserver();
    });
  }

  private configurarObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animarContador();
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (this.contadorVisitas) {
      this.observer.observe(this.contadorVisitas.nativeElement);
    }
  }

  animarContador() {
    const valorInicial = 1000000;
    const valorFinal = 1900000;
    const duracao = 2000;
    let tempoInicio: number | null = null;

    this.ngZone.runOutsideAngular(() => {
      const passo = (tempoAtual: number) => {
        if (!tempoInicio) tempoInicio = tempoAtual;

        const progresso = Math.min((tempoAtual - tempoInicio) / duracao, 1);
        const valorAtual = Math.floor(progresso * (valorFinal - valorInicial) + valorInicial);
        
        const novaVisualizacao = (valorAtual / 1000000).toFixed(1).replace('.', ',');

        if (novaVisualizacao !== this.visualizacoesFormatadas) {
          this.visualizacoesFormatadas = novaVisualizacao;
          this.cdr.detectChanges();
        }

        if (progresso < 1) {
          window.requestAnimationFrame(passo);
        } else {
          if (this.visualizacoesFormatadas !== '1,9') {
            this.visualizacoesFormatadas = '1,9';
            this.cdr.detectChanges();
          }
        }
      };

      window.requestAnimationFrame(passo);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}