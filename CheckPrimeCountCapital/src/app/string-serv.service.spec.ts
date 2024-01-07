import { TestBed } from '@angular/core/testing';

import { StringServService } from './string-serv.service';

describe('StringServService', () => {
  let service: StringServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
