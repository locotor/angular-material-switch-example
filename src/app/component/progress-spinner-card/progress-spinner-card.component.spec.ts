import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerCardComponent } from './progress-spinner-card.component';

describe('ProgressSpinnerCardComponent', () => {
  let component: ProgressSpinnerCardComponent;
  let fixture: ComponentFixture<ProgressSpinnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
