import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdPostListComponent } from './rd-post-list.component';

describe('RdPostListComponent', () => {
  let component: RdPostListComponent;
  let fixture: ComponentFixture<RdPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
