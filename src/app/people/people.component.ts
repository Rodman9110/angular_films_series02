import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  user$: Observable<any[]>;
  userPendingRequests$: Observable<any[]>;
  constructor(private userService: UserService,  private authentication: AuthenticationService) { }

  ngOnInit() {
    const user = this.authentication.getToken();
    this.user$ = this.userService.getAllUserNotAdded$(user);
    this.userPendingRequests$ = this.userService.getAllUserPendingRequests$(user);
  }

}
