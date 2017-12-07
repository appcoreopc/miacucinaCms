import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdNavigationComponent } from './cmd-navigation.component';

describe('CmdNavigationComponent', () => {
  let component: CmdNavigationComponent;
  let fixture: ComponentFixture<CmdNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
