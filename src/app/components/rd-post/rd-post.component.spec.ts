import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdPostComponent } from './rd-post.component';

describe('RdPostComponent', () => {
  let component: RdPostComponent;
  let fixture: ComponentFixture<RdPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
