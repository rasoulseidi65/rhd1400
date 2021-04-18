import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlistComponent } from './paperlist.component';

describe('PaperlistComponent', () => {
  let component: PaperlistComponent;
  let fixture: ComponentFixture<PaperlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
