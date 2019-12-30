import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserInterface } from '../Models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }
  user: UserInterface;
  ngOnInit() {
    this.user = this.authentication.getCurrentUser();
  }

}
