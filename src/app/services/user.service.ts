import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_USER_NOT_ADDED = 'http://localhost:8081/api/getAllUserNotAdded';
  URL_USER_PENDING_REQUESTS = 'http://localhost:8081/api/getAllUserPendingRequests';

  constructor(private http: HttpClient) { }

  getAllUserNotAdded$(id_user){
    const url = this.URL_USER_NOT_ADDED+"/"+id_user;
    console.log(url);
    return this.http.get<any[]>(url); 
  }
  getAllUserPendingRequests$(id_user){
    const url = this.URL_USER_PENDING_REQUESTS+"/"+id_user;
    console.log(url);
    return this.http.get<any[]>(url); 
  }
}
