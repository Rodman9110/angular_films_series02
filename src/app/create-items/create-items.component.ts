import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent implements OnInit {

  countries$: Observable<any[]>;
  genres$: Observable<any[]>;
  classification$: Observable<any[]>;
  constructor( 
    private countriesService: CountriesService,
    private genresService: SearchService,
    private filmsService: FilmsService
     ) { }

  ngOnInit() {
    this.countries$ = this.countriesService.getAllCountries$();
    this.genres$ = this.genresService.getAllGenres$();
    this.classification$ = this.genresService.getAllClassification$();
  }

  getFilm(film: any){
    console.log(film);
    this.filmsService.postAddFilm(film).subscribe();
  }

}
