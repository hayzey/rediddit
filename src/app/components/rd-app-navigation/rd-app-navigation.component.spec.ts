import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdAppNavigationComponent } from './rd-app-navigation.component';

describe('RdAppNavigationComponent', () => {
  let component: RdAppNavigationComponent;
  let fixture: ComponentFixture<RdAppNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdAppNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdAppNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
