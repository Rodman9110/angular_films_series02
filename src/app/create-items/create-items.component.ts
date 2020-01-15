import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { FilmsService } from '../services/films.service';
import { ActorsService } from '../services/actors.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {

  countries$: Observable<any[]>;
  genres$: Observable<any[]>;
  classification$: Observable<any[]>;
  actors$: Observable<any[]>;
  films$: Observable<any[]>;
  constructor( 
    private countriesService: CountriesService,
    private genresService: SearchService,
    private filmsService: FilmsService,
    private actorsService: ActorsService,
    private _snackBar: MatSnackBar,
     ) { }

  ngOnInit() {
    this.countries$ = this.countriesService.getAllCountries$();
    this.genres$ = this.genresService.getAllGenres$();
    this.classification$ = this.genresService.getAllClassification$();
    this.actors$ = this.actorsService.getAllActors$();
    this.films$ = this.filmsService.getAllFilms$();
  }

  getFilm(film: any){
    console.log(film);
    this.filmsService.postAddFilm(film).subscribe();
    this.openSnackBarFilm();
  }
  getActor(actor: any){
    console.log(actor);
    this.actorsService.postAddActor(actor).subscribe();
    this.openSnackBarActor();
  }
  getFilmActor(filmActor: any){
    console.log(filmActor);
    this.actorsService.postAddActorFilm(filmActor).subscribe();
    this.openSnackBarFilmActor();
  
  }
  openSnackBarFilm() {
    this._snackBar.open('Film created Successfully', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }
  openSnackBarActor() {
    this._snackBar.open('Actor created Successfully', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }
  openSnackBarFilmActor() {
    this._snackBar.open('Add Actor in Film  Successfully', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }
 
}
