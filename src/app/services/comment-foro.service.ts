import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentForoService {

  URL_COMMENTS_FORO_ADD = 'http://localhost:8081/comment/AddCommentForo';
  URL_COMMENTS_GET_ALL= 'http://localhost:8081/comment/getAllCommentsForo';

  constructor(private http:HttpClient) { }

  postCommentForo$(comment: any[]){
    const url = this.URL_COMMENTS_FORO_ADD;
    console.log(comment);
    return this.http.post<any[]>(url,comment);
  }
  getAllCommentsForo$(){
    const url = this.URL_COMMENTS_GET_ALL;
    return this.http.get<any[]>(url);
  
  }
}
