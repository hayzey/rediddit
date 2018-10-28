import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdPostSortSelectComponent } from './rd-post-sort-select.component';

describe('RdPostSortSelectComponent', () => {
  let component: RdPostSortSelectComponent;
  let fixture: ComponentFixture<RdPostSortSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdPostSortSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdPostSortSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
