import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  URL_ALL_COMPANIES = 'http://localhost:8081/apiCompanies/companies';

  constructor(private http:HttpClient) { }

  getAllCompanies$(){
    const url = this.URL_ALL_COMPANIES;
    return this.http.get<any[]>(url);
  }
}
