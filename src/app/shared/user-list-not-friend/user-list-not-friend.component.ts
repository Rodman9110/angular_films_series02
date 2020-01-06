import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-not-friend',
  templateUrl: './user-list-not-friend.component.html',
  styleUrls: ['./user-list-not-friend.component.css']
})
export class UserListNotFriendComponent implements OnInit {

  @Input() users : any[];
  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

}
