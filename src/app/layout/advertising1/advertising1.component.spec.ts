import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertising1Component } from './advertising1.component';

describe('Advertising1Component', () => {
  let component: Advertising1Component;
  let fixture: ComponentFixture<Advertising1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advertising1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advertising1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
