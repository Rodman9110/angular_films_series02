import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  genres$: Observable<any[]>;
  classification$: Observable<any[]>;
  films$: Observable<any[]>;
  constructor(private searchServices: SearchService, private filmsServicices:FilmsService) { }

  ngOnInit() {
    this.genres$ = this.searchServices.getAllGenres$();
    this.classification$ = this.searchServices.getAllClassification$();
  }

  getSearch(event: any){
    console.log(event);
    this.films$ = this.searchServices.findForGenres$(event);
    
  }

}
