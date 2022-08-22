import { TestBed } from '@angular/core/testing';

import { RouteActivatedService } from './route-activated.service';

describe('RouteActivatedService', () => {
  let service: RouteActivatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
