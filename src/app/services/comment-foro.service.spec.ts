import { TestBed } from '@angular/core/testing';

import { CommentForoService } from './comment-foro.service';

describe('CommentForoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentForoService = TestBed.get(CommentForoService);
    expect(service).toBeTruthy();
  });
});
