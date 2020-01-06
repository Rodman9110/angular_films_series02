import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListNotFriendComponent } from './user-list-not-friend.component';

describe('UserListNotFriendComponent', () => {
  let component: UserListNotFriendComponent;
  let fixture: ComponentFixture<UserListNotFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListNotFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListNotFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
