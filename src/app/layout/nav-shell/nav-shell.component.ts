import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserInterface } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { CountInterface } from 'src/app/Models/Count';

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.css']
})
export class NavShellComponent {

  title = 'Maniac TV'
  valor: any;
  //  countMyFilms: Observable<any>;
  //  const countMyFilms: void;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authentication: AuthenticationService,
    private filmsServices:FilmsService
    ) {  }
  user: UserInterface;
  count: CountInterface;
  ngOnInit() {
    const id_user = this.authentication.getToken();
    this.user = this.authentication.getCurrentUser();
    console.log(this.user);
    this.getCountMyFilms(id_user);
  }
  
  Logout(){
   this.authentication.logoutUser();
   this.router.navigate(["/login"])

  }
  getCountMyFilms(id_user){ 
    const countMyFilms = this.filmsServices.getCountMyFilms$(id_user).subscribe(data=>{
      console.log(data);
      this.valor = data;
    });  
  }

}
