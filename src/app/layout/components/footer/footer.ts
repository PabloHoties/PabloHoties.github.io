import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  discordCopiado: boolean = false;
  private timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) { }

  copiarDiscord() {
    navigator.clipboard.writeText('pablohoties').then(() => {

      this.discordCopiado = true;
      this.cdr.detectChanges();

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        this.discordCopiado = false;
        this.cdr.detectChanges();
      }, 2250);

    }).catch(err => {
      console.error('Falha ao copiar: ', err);
    });
  }
}
