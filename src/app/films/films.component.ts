import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films$: Observable<any[]>;
  star: Observable<any[]>;
  favoriteButtom: Observable<any>;
  constructor(private filmsService: FilmsService, private authentication: AuthenticationService) { }

  ngOnInit() {
    this.favoriteButtom = this.filmsService.getAllFilms$();
    this.films$ = this.filmsService.getAllFilms$();

    
    
  }

}
