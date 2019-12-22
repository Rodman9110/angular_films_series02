import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  
  
  film$: Observable<any>;
  comments$: Observable<any>;
  constructor(
    private filmsServices:FilmsService,
    private activatedRoute: ActivatedRoute,
    private commentServices: CommentService,
  
    ) 
    { 
   
    }

  
   
  

  ngOnInit() {
    const filmId = this.activatedRoute.snapshot.params.filmId;
    console.log(filmId);
    this.film$ = this.filmsServices.getFilm$(filmId);
    this.comments$ = this.commentServices.getCommentFilm$(filmId);
  }

}
