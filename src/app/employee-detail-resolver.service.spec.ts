import { TestBed } from '@angular/core/testing';

import { EmployeeDetailResolverService } from './employee-detail-resolver.service';

describe('EmployeeDetailResolverService', () => {
  let service: EmployeeDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
