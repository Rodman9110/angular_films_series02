import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films$: Observable<any[]>;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.films$ = this.filmsService.getAllFilms$();
    
  }

}
