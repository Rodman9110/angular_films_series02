import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentMailboxService } from '../services/comment-mailbox.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  comments$: Observable<any[]>;
  
  constructor(private commentMailBoxService: CommentMailboxService, private authentication: AuthenticationService) { }

  ngOnInit() {
    const user = this.authentication.getToken();
    this.comments$ = this.commentMailBoxService.getMyCommentMailbox$(user);
  }

}
