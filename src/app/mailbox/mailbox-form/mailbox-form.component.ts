import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommentForoService } from 'src/app/services/comment-foro.service';
import { UserInterface } from 'src/app/Models/User';
import { CommentMailboxService } from 'src/app/services/comment-mailbox.service';

@Component({
  selector: 'app-mailbox-form',
  templateUrl: './mailbox-form.component.html',
  styleUrls: ['./mailbox-form.component.css']
})
export class MailboxFormComponent implements OnInit {

  public mailboxForm: FormGroup;
  user: UserInterface;
  constructor(
    private formBuilder: FormBuilder,
    private commentMailboxService: CommentMailboxService,
    private router: Router,
    private authentication: AuthenticationService,
    private commentForoService: CommentForoService)
     {
       
      this.user = this.authentication.getCurrentUser();

      this.mailboxForm = this.formBuilder.group({
        id_receiver:[this.user.id, Validators.required],
        name_transmitter:[this.user.first_name, Validators.required],
        text:['', Validators.required],
        email_transmitter:[this.user.email,Validators.required],
        email_receiver:['',Validators.required],
        img_user_transmitter:[this.user.img_profile,Validators.required] 
      });
    }

  ngOnInit() {
  }

  ClickSaveComment(){ 
    
    console.log(this.user.first_name);
    console.log(this.mailboxForm.value); 
    

     this.commentMailboxService.postCommentMailbox$(this.mailboxForm.value)
     .subscribe(data => {
         alert("Employee created successfully.");
         this.router.navigate(["/mailbox"]);
    
     }
     );
  }
}
