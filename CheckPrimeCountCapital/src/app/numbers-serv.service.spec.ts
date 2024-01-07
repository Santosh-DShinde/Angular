import { TestBed } from '@angular/core/testing';

import { NumbersServService } from './numbers-serv.service';

describe('NumbersServService', () => {
  let service: NumbersServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
