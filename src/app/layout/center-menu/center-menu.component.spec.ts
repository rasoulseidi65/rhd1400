import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMenuComponent } from './center-menu.component';

describe('CenterMenuComponent', () => {
  let component: CenterMenuComponent;
  let fixture: ComponentFixture<CenterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
