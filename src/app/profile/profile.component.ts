import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserInterface } from '../Models/User';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  country$: Observable<any>;

  constructor(
    private authentication: AuthenticationService,
    private countriesServices: CountriesService
    ) { }
  user: UserInterface;
  ngOnInit() {
    
    this.user = this.authentication.getCurrentUser();
    const user_valor = this.authentication.getCurrentUser();
    console.log('perfil '+ user_valor.id_country);
    return this.country$ = this.countriesServices.getCountriesId$(user_valor.id_country)
  }

}
