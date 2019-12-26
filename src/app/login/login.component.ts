import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpLoginService } from '../services/http-login.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpLogin: HttpLoginService,
    private authentication: AuthenticationService
  ) { 

    this.loginForm = this.formBuilder.group({
     email:['', Validators.required],
     password:['', Validators.required] 
    });

  }

  ngOnInit() {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("currentUser");
  }

  ClickVerificationLogin(){
    console.log(this.loginForm.value);
    this.httpLogin.loginVerification(this.loginForm.value)
    .subscribe(data =>{
      console.log(data);
      this.authentication.setUser(data);
      let token = data.id;
      console.log(token);
      this.authentication.setToken(token);
      this.router.navigate(['']);
     
    },
    error => console.log(error)
    );

  }

}

