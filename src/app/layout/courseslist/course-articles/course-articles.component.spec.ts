import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseArticlesComponent } from './course-articles.component';

describe('CourseArticlesComponent', () => {
  let component: CourseArticlesComponent;
  let fixture: ComponentFixture<CourseArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
