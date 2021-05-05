import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertising3Component } from './advertising3.component';

describe('Advertising3Component', () => {
  let component: Advertising3Component;
  let fixture: ComponentFixture<Advertising3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advertising3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advertising3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
