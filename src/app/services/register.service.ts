import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL_REGISTER_USER= 'http://localhost:8081/api/postAddRegisterUser'
  URL_ROLE = 'http://localhost:8081/api/role'
  URL_GENDER = 'http://localhost:8081/api/gender'



  constructor(private http: HttpClient) { }

  postAddRegisterUser$(user: any){
    console.log(user);
    const url = this.URL_REGISTER_USER;
    return this.http.post<any>(url,user);

  }
  getAllRole$(){
    const url = this.URL_ROLE;
    return this.http.get<any[]>(url);
  }
  getAllGender$(){
    const url = this.URL_GENDER;
    return this.http.get<any[]>(url);
  }
}
