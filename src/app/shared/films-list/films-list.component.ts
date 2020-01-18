import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInterface } from 'src/app/Models/User';
import { Router } from '@angular/router';
import { LikeService } from 'src/app/services/like.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  @Input() films;
  @Input() star;
  @Input() favoriteButtom;
  @Input() likes;
  user: UserInterface;
  constructor(
     private filmsService: FilmsService,
     private authentication: AuthenticationService,
     private router: Router,
     private likeService: LikeService,
     private _snackBar: MatSnackBar,
     ) { }

  ngOnInit() {
    
  }
  
  AddFavoriteFilm(IdFilm){
    const id = this.authentication.getToken();
    this.filmsService.postMyFavoriteFilm$(IdFilm,id).subscribe();
    this.openSnackBarFilmFavorite();
    this.router.navigate(["films"]);
  }
  DeleteMyFavoriteFilm(IdFilm){
    const id_user = this.authentication.getToken();
    this.filmsService.DeleteMyFavoriteFilm$(id_user,IdFilm).subscribe()
    this.openSnackBarDeleteFilmFavorite();
    this.router.navigate(["myfilms"]);
  }

  AddFilmLike(IdFilm){
    const id_user = this.authentication.getToken();
    this.likeService.postFilmLike$(id_user,IdFilm).subscribe();
    this.openSnackBarFilmLike();

  }
  getCountAllFilmLike(){
    this.likeService.getCountAllFilmLike$().subscribe(data=>{
      console.log(data);
    });
  }
  openSnackBarFilmLike() {
    this._snackBar.open('Film Like', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }
  openSnackBarFilmFavorite() {
    this._snackBar.open('Film Add Favorite', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }
  openSnackBarDeleteFilmFavorite() {
    this._snackBar.open('Film Delete Favorite', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }


}
