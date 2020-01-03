import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentMailboxService {

  URL_COMMENTS_MY_MAILBOX = 'http://localhost:8081/comment/getMyCommentMailbox';
  constructor(private http: HttpClient) { }

  getMyCommentMailbox$(id_user){

    const url = this.URL_COMMENTS_MY_MAILBOX+"/"+id_user;
    console.log(url);
    return this.http.get<any[]>(url); 
  }
}
