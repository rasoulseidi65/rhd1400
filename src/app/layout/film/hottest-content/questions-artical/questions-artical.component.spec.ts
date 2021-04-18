import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsArticalComponent } from './questions-artical.component';

describe('QuestionsArticalComponent', () => {
  let component: QuestionsArticalComponent;
  let fixture: ComponentFixture<QuestionsArticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsArticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
