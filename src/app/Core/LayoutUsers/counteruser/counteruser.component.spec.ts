import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteruserComponent } from './counteruser.component';

describe('CounteruserComponent', () => {
  let component: CounteruserComponent;
  let fixture: ComponentFixture<CounteruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
