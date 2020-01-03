import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';
import { AuthenticationService } from '../services/authentication.service';
import { UserInterface } from '../Models/User';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

   
  films$: Observable<any[]>;
  constructor(private filmsService: FilmsService,  private authentication: AuthenticationService) { }

  ngOnInit() {
    const user = this.authentication.getToken();
    console.log(user);
    this.films$ = this.filmsService.getAllMyFilms$(user);
    
  }

}
