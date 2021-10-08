import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberpricingComponent } from './septemberpricing.component';

describe('SeptemberpricingComponent', () => {
  let component: SeptemberpricingComponent;
  let fixture: ComponentFixture<SeptemberpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptemberpricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptemberpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
