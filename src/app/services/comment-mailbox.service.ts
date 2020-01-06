import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentMailboxService {

  URL_COMMENTS_MY_MAILBOX = 'http://localhost:8081/comment/getMyCommentMailbox';
  URL_COMMENTS_MAILBOX_ADD = 'http://localhost:8081/comment/postCommentMailbox';
  constructor(private http: HttpClient) { }

  getMyCommentMailbox$(email){

    const url = this.URL_COMMENTS_MY_MAILBOX+"/"+email;
    console.log(url);
    return this.http.get<any[]>(url); 
  }
  postCommentMailbox$(comment: any[]){
    const url = this.URL_COMMENTS_MAILBOX_ADD;
    console.log(comment);
    return this.http.post<any[]>(url,comment);
  }
}
