import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdsenseComponent } from './dashboard-adsense.component';

describe('DashboardAdsenseComponent', () => {
  let component: DashboardAdsenseComponent;
  let fixture: ComponentFixture<DashboardAdsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdsenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
