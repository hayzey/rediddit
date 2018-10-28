import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdUserMenuComponent } from './rd-user-menu.component';

describe('RdUserMenuComponent', () => {
  let component: RdUserMenuComponent;
  let fixture: ComponentFixture<RdUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
