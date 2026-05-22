import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsSection } from './hackathons-section';

describe('HackathonsSection', () => {
  let component: HackathonsSection;
  let fixture: ComponentFixture<HackathonsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackathonsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackathonsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
