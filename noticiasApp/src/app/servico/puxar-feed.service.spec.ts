import { TestBed } from '@angular/core/testing';

import { PuxarFeedService } from './puxar-feed.service';

describe('PuxarFeedService', () => {
  let service: PuxarFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuxarFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
