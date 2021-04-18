import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommantsComponent } from './commants.component';

describe('CommantsComponent', () => {
  let component: CommantsComponent;
  let fixture: ComponentFixture<CommantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
