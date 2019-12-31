import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries$: Observable<any[]>;
  public registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private countriesService: CountriesService) {
    this.countries$ = this.countriesService.getAllCountries$();
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['', Validators.required],
      password:['', Validators.required], 
      country:[]
     });
  }

}
