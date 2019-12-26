import { Injectable } from '@angular/core';
import { UserInterface } from '../Models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  
  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  getToken() {
    return localStorage.getItem("accessToken");
  }
  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }
  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:8081/api/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserInterface>(url_api, { headers: this.headers });
  }




}
