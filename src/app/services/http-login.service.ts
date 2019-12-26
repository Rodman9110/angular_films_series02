import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {

  URL_LOGIN_VERIFICATION = 'http://localhost:8081/api/loginVerification';

  constructor(private http: HttpClient) { }

  public loginVerification(login: any) {
    const url = this.URL_LOGIN_VERIFICATION;
    console.log(login);
    return this.http.post<any>(url, login);
  }

}
