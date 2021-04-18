import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EposideComponent } from './eposide.component';

describe('EposideComponent', () => {
  let component: EposideComponent;
  let fixture: ComponentFixture<EposideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EposideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EposideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
