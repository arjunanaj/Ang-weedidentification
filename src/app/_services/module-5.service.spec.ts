import { TestBed } from '@angular/core/testing';

import { Module5Service } from './module-5.service';

describe('Module5Service', () => {
  let service: Module5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
