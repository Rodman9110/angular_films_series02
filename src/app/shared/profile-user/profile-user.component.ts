import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  @Input() country: any[];
  constructor(
    private authentication: AuthenticationService,
    
    ) { }
  

  ngOnInit() {
    
   
  }

}
