import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-pending-requests',
  templateUrl: './user-list-pending-requests.component.html',
  styleUrls: ['./user-list-pending-requests.component.css']
})
export class UserListPendingRequestsComponent implements OnInit {

  constructor() { }

  @Input() users : any[];
  ngOnInit() {
  }

}
