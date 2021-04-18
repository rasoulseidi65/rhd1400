import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCantentComponent } from './all-cantent.component';

describe('AllCantentComponent', () => {
  let component: AllCantentComponent;
  let fixture: ComponentFixture<AllCantentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCantentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCantentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
