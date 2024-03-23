import { TestBed } from '@angular/core/testing';

import { Module2Service } from './module-2.service';

describe('Module2Service', () => {
  let service: Module2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
