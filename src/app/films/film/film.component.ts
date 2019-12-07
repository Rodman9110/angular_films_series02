import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film$: Observable<any>;
  constructor(private filmsServices:FilmsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const filmId = this.activatedRoute.snapshot.params.filmId;
    console.log(filmId);
    this.film$ = this.filmsServices.getFilm$(filmId);
  }

}
