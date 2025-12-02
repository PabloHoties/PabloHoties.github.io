import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLayoutShell } from './portfolio-layout-shell';

describe('PortfolioLayoutShell', () => {
  let component: PortfolioLayoutShell;
  let fixture: ComponentFixture<PortfolioLayoutShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioLayoutShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioLayoutShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
