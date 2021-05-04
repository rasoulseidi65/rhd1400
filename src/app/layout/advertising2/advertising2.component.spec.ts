import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertising2Component } from './advertising2.component';

describe('Advertising2Component', () => {
  let component: Advertising2Component;
  let fixture: ComponentFixture<Advertising2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advertising2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advertising2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
