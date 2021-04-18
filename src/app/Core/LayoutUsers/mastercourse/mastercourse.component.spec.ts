import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercourseComponent } from './mastercourse.component';

describe('MastercourseComponent', () => {
  let component: MastercourseComponent;
  let fixture: ComponentFixture<MastercourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
