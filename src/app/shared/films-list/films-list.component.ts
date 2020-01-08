import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInterface } from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  @Input() films;
  @Input() star;
  @Input() favoriteButtom;
  user: UserInterface;
  constructor(private filmsService: FilmsService, private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
  }

  AddFavoriteFilm(IdFilm){
    const id = this.authentication.getToken();
    this.filmsService.postMyFavoriteFilm$(IdFilm,id).subscribe();
    alert("New Favorite Film")
    this.router.navigate(["films"])
  }
  DeleteMyFavoriteFilm(IdFilm){
    const id_user = this.authentication.getToken();
    this.filmsService.DeleteMyFavoriteFilm$(id_user,IdFilm).subscribe()
    alert("Delete My Favorite Film")
  }


}
