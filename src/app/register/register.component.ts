import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { RegisterService } from '../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Post {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  post: Post = {
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now())
  }
  countries$: Observable<any[]>;
  roles$:Observable<any[]>;
  gender$:Observable<any[]>;
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService,
    private registerServices: RegisterService,
    private _snackBar: MatSnackBar
     ) {
    this.countries$ = this.countriesService.getAllCountries$();
    this.roles$  = this.registerServices.getAllRole$();
    this.gender$ =this.registerServices.getAllGender$();
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['', Validators.required],
      password:['', Validators.required], 
      id_gender:[],
      id_role:[],
      country:[],
      img_profile:[],
      date_user:['', Validators.required]

     });
  }

  ClickSaveRegistry(){
    console.log(this.registerForm.value);
    this.registerServices.postAddRegisterUser$(this.registerForm.value).subscribe();
    // this.openSnackBarRegister();
  }

  openSnackBarRegister() {
    this._snackBar.open('User created Successfully', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }

}
