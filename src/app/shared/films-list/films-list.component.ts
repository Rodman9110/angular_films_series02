import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInterface } from 'src/app/Models/User';
import { Router } from '@angular/router';
import { LikeService } from 'src/app/services/like.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from "@angular/material/sort";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource(this.films);
  constructor(
     private filmsService: FilmsService,
     private authentication: AuthenticationService,
     private router: Router,
     private likeService: LikeService,
     private _snackBar: MatSnackBar,
     ) { }

     
  ngOnInit() {
    this.dataSource.data = this.films;
    this.dataSource.paginator = this.paginator;
    
  }
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
   
  
  AddFavoriteFilm(IdFilm){
    const id = this.authentication.getToken();
    this.filmsService.postMyFavoriteFilm$(IdFilm,id).subscribe();
    this.openSnackBarFilmFavorite();
    this.router.navigate(["films"]);
    window.location.reload();
  }
  DeleteMyFavoriteFilm(IdFilm){
    const id_user = this.authentication.getToken();
    this.filmsService.DeleteMyFavoriteFilm$(id_user,IdFilm).subscribe()
    this.openSnackBarDeleteFilmFavorite();
    this.router.navigate(["myfilms"]);
    window.location.reload();
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
