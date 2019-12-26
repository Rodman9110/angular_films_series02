import { TestBed } from '@angular/core/testing';

import { HttpLoginService } from './http-login.service';

describe('HttpLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpLoginService = TestBed.get(HttpLoginService);
    expect(service).toBeTruthy();
  });
});
