import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';
import { FilmsService } from '../services/films.service';
import { ActorsService } from '../services/actors.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompaniesService } from '../services/companies.service';


@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  countries$: Observable<any[]>;
  genres$: Observable<any[]>;
  classification$: Observable<any[]>;
  actors$: Observable<any[]>;
  films$: Observable<any[]>;
  companies$: Observable<any[]>;
  filmCompanies$: Observable<any[]>;
  
  subscription: Subscription;

  constructor(
    private countriesService: CountriesService,
    private genresService: SearchService,
    private filmsService: FilmsService,
    private companiesService: CompaniesService,
    private _snackBar: MatSnackBar,
    
  ) { }

  ngOnInit():void {

    this.films$ = this.filmsService.getAllFilms$();
    // this.companies$ = this.companiesService.getAllCompanies$();
    // this.filmCompanies$ = this.companiesService.getFilmsCompanies$();

    this.subscription = this.filmsService.refresh$.subscribe(() =>{

      this.films$ = this.filmsService.getAllFilms$();
      // this.companies$ = this.companiesService.getAllCompanies$();
      // this.filmCompanies$ = this.companiesService.getFilmsCompanies$();

    });

  }

  EditOrDeleteFilm(event): void{

    if(Number.isInteger(event)){

      this.filmsService.postDeleteFilm$(event).subscribe(
        result => this.AlertFlim("Se a eliminado la pelicula","OK"),
        error => {
          this.AlertFlim("Error elemento no eliminado","OK")
        }
      );

      
    }
    else{
      this.filmsService.postEditFilm$(event).subscribe(
        result => this.AlertFlim("Se a editado con exito la pelicula " ,"OK"),
        error => {
          this.AlertFlim("Error no se a editado con exito la pelicula " ,"OK")
        }
      );
    }  
  }

  NewFilm(event): void{
    console.log("nuevo",event)
    this.filmsService.postAddFilmADV$(event).subscribe(
      result => this.AlertFlim("Se a creado correctamente la pelicula","OK"),
      error => {
        this.AlertFlim("Error no se a creado correctamente la pelicula" ,"OK")
      }
    )
  } 

  AlertFlim(mesaje,title) {
    this._snackBar.open(mesaje, title, {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
      
    });
  }

}
