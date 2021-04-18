import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CooperationComponent } from './cooperation.component';

describe('CooperationComponent', () => {
  let component: CooperationComponent;
  let fixture: ComponentFixture<CooperationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
