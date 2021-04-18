import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAllComponent } from './content-all.component';

describe('ContentAllComponent', () => {
  let component: ContentAllComponent;
  let fixture: ComponentFixture<ContentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
