import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators , FormControl, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInterface } from 'src/app/Models/User';
import { CommentForoService } from 'src/app/services/comment-foro.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-foro-form',
  templateUrl: './foro-form.component.html',
  styleUrls: ['./foro-form.component.css']
})
export class ForoFormComponent implements OnInit {

  public foroForm: FormGroup;
  user: UserInterface;
  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private router: Router,
    private authentication: AuthenticationService,
    private commentForoService: CommentForoService,
    private _snackBar: MatSnackBar
    ) { 
      this.user = this.authentication.getCurrentUser();
      console.log(this.user);  

    this.foroForm = this.formBuilder.group({
      id_user:[this.user.id, Validators.required],
      name:[this.user.first_name, Validators.required],
      // name:['', Validators.required],
      text:['', Validators.required],
      email:[this.user.email,Validators.required],
      img_profile:[this.user.img_profile,Validators.required] 
    });
  }

  ngOnInit() {
   
  } 
  
  ClickSaveComment(){ 
    
    console.log(this.user.first_name);
    console.log(this.foroForm.value); 
    

     this.commentForoService.postCommentForo$(this.foroForm.value)
     .subscribe(data => {
      
         this.foroForm.reset();
         this.openSnackBarForo()
         this.router.navigate(["/foro"]);
         window.location.reload();
    
     }
     );   
  }
  openSnackBarForo() {
    this._snackBar.open('Message created successfully', 'Go!', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    
    });
  }






}
