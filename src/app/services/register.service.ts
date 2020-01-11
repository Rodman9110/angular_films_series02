import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL_REGISTER_USER= 'http://localhost:8081/api/postAddRegisterUser'

  constructor(private http: HttpClient) { }

  postAddRegisterUser$(user: any){
    console.log(user);
    const url = this.URL_REGISTER_USER;
    return this.http.post<any>(url,user);

  }
}
