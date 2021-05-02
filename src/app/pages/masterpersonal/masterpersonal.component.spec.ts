import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpersonalComponent } from './masterpersonal.component';

describe('MasterpersonalComponent', () => {
  let component: MasterpersonalComponent;
  let fixture: ComponentFixture<MasterpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
