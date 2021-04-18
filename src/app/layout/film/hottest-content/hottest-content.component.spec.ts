import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottestContentComponent } from './hottest-content.component';

describe('HottestContentComponent', () => {
  let component: HottestContentComponent;
  let fixture: ComponentFixture<HottestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottestContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HottestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
