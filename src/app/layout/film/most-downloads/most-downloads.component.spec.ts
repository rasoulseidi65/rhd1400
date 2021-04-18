import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostDownloadsComponent } from './most-downloads.component';

describe('MostDownloadsComponent', () => {
  let component: MostDownloadsComponent;
  let fixture: ComponentFixture<MostDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostDownloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
