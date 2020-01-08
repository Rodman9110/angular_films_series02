import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { UserInterface } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  public filmForm: FormGroup;
  @Input() film: any[];
  @Input() comments: any[];
  @Input() genres: any[];
  @Input() country: any[];
  @Input() filmId: number;
  user: UserInterface;
  player: YT.Player;
  constructor(
    private formBuilder: FormBuilder,
    private commentServices: CommentService,
    private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute
    ) 
    {
    const filmId = this.activatedRoute.snapshot.params.filmId;
    console.log(filmId)

    this.user = this.authentication.getCurrentUser();
      console.log(this.user);  

    this.filmForm = this.formBuilder.group({
      id_film:[filmId, Validators.required],
      name:[this.user.first_name, Validators.required],
      text:['', Validators.required],
      email:[this.user.email,Validators.required],
      img_profile:[this.user.img_profile,Validators.required]
    });
   }

  ngOnInit() {
    console.log(this.film);
    // console.log(this.filmId)
  }

  ClickSaveCommentCritic(){
    console.log(this.filmForm.value);  
     this.commentServices.postCommentCriticFilm$(this.filmForm.value)
     .subscribe();
     this.filmForm.reset();
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
