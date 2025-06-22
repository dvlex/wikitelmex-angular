import { TestBed } from '@angular/core/testing';

import { DieseltankService } from './dieseltank.service';

describe('DieseltankService', () => {
  let service: DieseltankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieseltankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
