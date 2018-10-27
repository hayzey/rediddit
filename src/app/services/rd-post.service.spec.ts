import { TestBed, inject } from '@angular/core/testing';

import { RdPostService } from './rd-post.service';

describe('RdPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdPostService]
    });
  });

  it('should be created', inject([RdPostService], (service: RdPostService) => {
    expect(service).toBeTruthy();
  }));
});
