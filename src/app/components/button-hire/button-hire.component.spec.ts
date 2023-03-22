import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHireComponent } from './button-hire.component';

describe('ButtonHireComponent', () => {
  let component: ButtonHireComponent;
  let fixture: ComponentFixture<ButtonHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
