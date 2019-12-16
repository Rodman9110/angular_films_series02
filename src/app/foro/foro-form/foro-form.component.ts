import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators , FormControl, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro-form',
  templateUrl: './foro-form.component.html',
  styleUrls: ['./foro-form.component.css']
})
export class ForoFormComponent implements OnInit {

  public foroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private commentService: CommentService, private router: Router) { 

    this.foroForm = this.formBuilder.group({
      name:['', Validators.required],
      text:['', Validators.required] 
    });
  }

  ngOnInit() {
   
  } 
  
  ClickSaveComment(){ 
    
    console.log(this.foroForm.value);   
     this.commentService.postComment$(this.foroForm.value)
     .subscribe(data => {
        // alert("Employee created successfully.");
         this.router.navigate(["/films"]);
      });    
    
  }
}
