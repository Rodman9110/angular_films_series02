import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  URL_ALL_COMPANIES = 'http://localhost:8081/apiCompanies/companies';
  URL_FILM_COMPANIES = 'http://localhost:8081/apiCompanies/FilmsCompanies';
  
  constructor(private http:HttpClient) { }

  getAllCompanies$(){
    const url = this.URL_ALL_COMPANIES;
    console.log(url);
    return this.http.get<any[]>(url);
  }
  getFilmsCompanies$(){
    const url = this.URL_FILM_COMPANIES;
    console.log(url);
    return this.http.get<any[]>(url);

  }
}
