import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';
import { AuthenticationService } from '../services/authentication.service';
import { LikeService } from '../services/like.service';
import { FilmInterface } from 'src/app/Models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  

  public filmsTest$:  FilmInterface[];

  films$: Observable<any[]>;
  star: Observable<any[]>;
  favoriteButtom: Observable<any>;
  likes$: Observable<any[]>;
  constructor(
    private filmsService: FilmsService,
    private authentication: AuthenticationService,
    private likeService: LikeService
    ) { }

  ngOnInit() {
    this.favoriteButtom = this.filmsService.getAllFilms$();
    this.films$ = this.filmsService.getAllFilms$(); 
    this.likes$ = this.likeService.getCountAllFilmLike$(); 
    // this.filmsTest$ =  this.filmsService.getAllFilmsTest$();

    this.filmsService.getAllFilmsTest$().subscribe(dataFilms => {
      this.filmsTest$ = dataFilms;
      console.log("DATAMODEL",dataFilms)
      
    });
    
    // console.log(this.filmsTest$);
    // console.log(this.films$);
  }
  getSearch(event: any){
    console.log(event); 
    this.films$ = this.filmsService.getSearchFilmForName$(event);
  }
}
