import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListMailboxComponent } from './comment-list-mailbox.component';

describe('CommentListMailboxComponent', () => {
  let component: CommentListMailboxComponent;
  let fixture: ComponentFixture<CommentListMailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListMailboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
