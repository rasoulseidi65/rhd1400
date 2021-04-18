import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularContentComponent } from './most-popular-content.component';

describe('MostPopularContentComponent', () => {
  let component: MostPopularContentComponent;
  let fixture: ComponentFixture<MostPopularContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
