import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  public filmForm: FormGroup;
  @Input() film: any[];
  @Input() comments: any[];
  constructor(private formBuilder: FormBuilder , private commentServices: CommentService) {

    this.filmForm = this.formBuilder.group({
      id_film:['', Validators.required],
      name:['', Validators.required],
      text:['', Validators.required]
    });
   }

  ngOnInit() {
    console.log(this.film);
  }

  ClickSaveCommentCritic(){
    console.log(this.filmForm.value);  
     this.commentServices.postCommentCriticFilm$(this.filmForm.value)
     .subscribe();


  }



}
