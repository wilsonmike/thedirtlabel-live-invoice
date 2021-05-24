import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaytodateComponent } from './maytodate.component';

describe('MaytodateComponent', () => {
  let component: MaytodateComponent;
  let fixture: ComponentFixture<MaytodateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaytodateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaytodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
