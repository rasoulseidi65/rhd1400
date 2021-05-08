import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksamplesComponent } from './worksamples.component';

describe('WorksamplesComponent', () => {
  let component: WorksamplesComponent;
  let fixture: ComponentFixture<WorksamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
