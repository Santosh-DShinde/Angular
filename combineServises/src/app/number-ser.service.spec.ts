import { TestBed } from '@angular/core/testing';

import { NumberSerService } from './number-ser.service';

describe('NumberSerService', () => {
  let service: NumberSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
