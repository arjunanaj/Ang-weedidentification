import { TestBed } from '@angular/core/testing';

import { Module4Service } from './module-4.service';

describe('Module4Service', () => {
  let service: Module4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
