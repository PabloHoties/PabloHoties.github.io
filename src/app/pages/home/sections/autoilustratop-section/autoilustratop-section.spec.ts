import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoilustratopSection } from './autoilustratop-section';

describe('AutoilustratopSection', () => {
  let component: AutoilustratopSection;
  let fixture: ComponentFixture<AutoilustratopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoilustratopSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoilustratopSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
