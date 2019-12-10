import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  genres$: Observable<any[]>;
  classification$: Observable<any[]>;
  constructor(private searchServices: SearchService) { }

  ngOnInit() {
    this.genres$ = this.searchServices.getAllGenres$();
    this.classification$ = this.searchServices.getAllClassification$();
  }

}
