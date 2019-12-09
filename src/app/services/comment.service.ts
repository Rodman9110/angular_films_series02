import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URL_COMMENTS = 'http://localhost:8081/api/comments';

  constructor(private http:HttpClient) { }

  getAllComments$(){
    const url = this.URL_COMMENTS;
    return this.http.get<any[]>(url);
  }


}
