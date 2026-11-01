import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesSection } from './certificates-section';

describe('CertificatesSection', () => {
  let component: CertificatesSection;
  let fixture: ComponentFixture<CertificatesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
