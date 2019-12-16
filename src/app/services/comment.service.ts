import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URL_COMMENTS = 'http://localhost:8081/api/comments';
  URL_COMMENTS_ADD = 'http://localhost:8081/api';
  constructor(private http:HttpClient) { }

  getAllComments$(){
    const url = this.URL_COMMENTS;
    return this.http.get<any[]>(url);
  }
  postComment$(comment: any[]){
    const url = this.URL_COMMENTS_ADD;
    console.log(comment);
    return this.http.post<any[]>(url,comment);
  }


}
