import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlaceInfoComponentComponent } from './tour-place-info-component.component';

describe('TourPlaceInfoComponentComponent', () => {
  let component: TourPlaceInfoComponentComponent;
  let fixture: ComponentFixture<TourPlaceInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPlaceInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPlaceInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
