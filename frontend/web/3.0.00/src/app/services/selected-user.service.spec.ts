import { TestBed } from '@angular/core/testing';

import { SelectedUserService } from './selected-user.service';

describe('SelectedUserService', () => {
  let service: SelectedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
