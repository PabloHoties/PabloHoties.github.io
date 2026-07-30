import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection implements OnInit {

  contactForm!: FormGroup;

  private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3nzhwDmyCwpUM_BvYrSvmKh_TJTPIzxkAWgRFIPiALijIDcitb-ralJ5QKs7rdQCdNA/exec';
  private readonly IPIFY_URL = 'https://api.ipify.org?format=json';

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;


  private toastTimeoutId?: ReturnType<typeof setTimeout>;
  private destroyRef = inject(DestroyRef);


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    this.destroyRef.onDestroy(() => {
      this.clearToastTimeout();
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: [''],
      message: ['', [Validators.required]]
    });
  }

  private async getUserIp(): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.http.get<{ ip: string }>(this.IPIFY_URL).pipe(
          catchError(() => of({ ip: '' }))
        )
      );
      return response.ip || '';
    } catch (error) {
      return '';
    }
  }

  private getMetadata() {
    return {
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      language: navigator.language || '',
      resolution: `${window.screen.width}x${window.screen.height}`,
      userAgent: navigator.userAgent || '',
      pageUrl: window.location.href
    };
  }

  private showToast(type: 'success' | 'error'): void {
    this.submitSuccess = type === 'success';
    this.submitError = type === 'error';
    this.isSubmitting = false;

    if (type === 'success') {
      this.contactForm.reset();
    }

    this.cdr.detectChanges();
    this.clearToastTimeout();
    this.toastTimeoutId = setTimeout(() => {
      this.submitSuccess = false;
      this.submitError = false;
      this.cdr.detectChanges();
    }, 5000);
  }

  private clearToastTimeout(): void {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
      this.toastTimeoutId = undefined;
    }
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.cdr.detectChanges();

    const ipAddress = await this.getUserIp();
    const formValues = this.contactForm.value;
    const metadata = this.getMetadata();

    const payload = {
      name: formValues.name,
      contact: formValues.contact,
      message: formValues.message,
      ip: ipAddress,
      ...metadata
    };

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset=utf-8',
    });

    this.http.post(this.GOOGLE_SCRIPT_URL, JSON.stringify(payload), { headers }).subscribe({
      next: (response: any) => {
        if (response && response.status === 'success') {
          this.showToast('success');
        } else {
          console.error('Erro no Apps Script:', response);
          this.showToast('error');
        }
      },
      error: (error) => {
        console.error('Erro HTTP:', error);
        this.showToast('error');
      }
    });
  }
}
