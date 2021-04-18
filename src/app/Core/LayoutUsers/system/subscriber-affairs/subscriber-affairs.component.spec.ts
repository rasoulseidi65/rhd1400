import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberAffairsComponent } from './subscriber-affairs.component';

describe('SubscriberAffairsComponent', () => {
  let component: SubscriberAffairsComponent;
  let fixture: ComponentFixture<SubscriberAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
