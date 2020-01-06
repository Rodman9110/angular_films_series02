import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListPendingRequestsComponent } from './user-list-pending-requests.component';

describe('UserListPendingRequestsComponent', () => {
  let component: UserListPendingRequestsComponent;
  let fixture: ComponentFixture<UserListPendingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListPendingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
