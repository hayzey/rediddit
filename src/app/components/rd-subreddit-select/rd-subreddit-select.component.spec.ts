import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdSubredditSelectComponent } from './rd-subreddit-select.component';

describe('RdSubredditSelectComponent', () => {
  let component: RdSubredditSelectComponent;
  let fixture: ComponentFixture<RdSubredditSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdSubredditSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdSubredditSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
