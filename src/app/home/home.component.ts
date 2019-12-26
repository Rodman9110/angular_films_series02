import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserInterface } from '../Models/User';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }
  user: UserInterface;

  ngOnInit() {
    this.user = this.authentication.getCurrentUser();
    console.log(this.user);
  }

}
