import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-foro-form',
  templateUrl: './foro-form.component.html',
  styleUrls: ['./foro-form.component.css']
})
export class ForoFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  foroForm = this.formBuilder.group({
    name:[null,[Validators.required , Validators.required]],
    text:[null,[Validators.required , Validators.maxLength(10)]]

  })

}
