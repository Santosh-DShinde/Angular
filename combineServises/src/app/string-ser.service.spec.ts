import { TestBed } from '@angular/core/testing';

import { StringSerService } from './string-ser.service';

describe('StringSerService', () => {
  let service: StringSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
