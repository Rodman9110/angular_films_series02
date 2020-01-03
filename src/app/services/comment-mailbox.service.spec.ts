import { TestBed } from '@angular/core/testing';

import { CommentMailboxService } from './comment-mailbox.service';

describe('CommentMailboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentMailboxService = TestBed.get(CommentMailboxService);
    expect(service).toBeTruthy();
  });
});
