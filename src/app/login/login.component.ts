import { Component, OnInit, Input } from '@angular/core';
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

  @Input() error: string | null;
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
      if (data == null) {       
        error => console.log(error)
        this.error = "Wrong username or password."
      }
      else{
        console.log(data);
        this.authentication.setUser(data);
        let token = data.id;
        console.log(token);
        this.authentication.setToken(token);
        this.router.navigate(['']);
      } 
    },
   
    );

  }

}

