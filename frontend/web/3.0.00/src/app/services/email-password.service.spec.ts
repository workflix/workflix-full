import { TestBed } from '@angular/core/testing';

import { EmailPasswordService } from './email-password.service';

describe('EmailPasswordService', () => {
  let service: EmailPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
