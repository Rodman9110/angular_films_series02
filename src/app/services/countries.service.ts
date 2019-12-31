import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL_COUNTRIES = 'http://localhost:8081/api/countries';
  constructor(private http:HttpClient) { }

  getAllCountries$(){
    const url = this.URL_COUNTRIES;
    return this.http.get<any[]>(url);
  }
}
