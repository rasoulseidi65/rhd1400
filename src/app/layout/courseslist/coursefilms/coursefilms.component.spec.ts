import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefilmsComponent } from './coursefilms.component';

describe('CoursefilmsComponent', () => {
  let component: CoursefilmsComponent;
  let fixture: ComponentFixture<CoursefilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursefilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
