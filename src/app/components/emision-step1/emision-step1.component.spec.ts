import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionStep1Component } from './emision-step1.component';

describe('EmisionStep1Component', () => {
  let component: EmisionStep1Component;
  let fixture: ComponentFixture<EmisionStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisionStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
