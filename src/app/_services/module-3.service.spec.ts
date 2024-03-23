import { TestBed } from '@angular/core/testing';

import { Module3Service } from './module-3.service';

describe('Module3Service', () => {
  let service: Module3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Module3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
