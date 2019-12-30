import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required] 
     });
  }

}
