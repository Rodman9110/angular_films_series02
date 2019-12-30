import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  URL_FILMS = 'http://localhost:8081/api/films';
  headers = new HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers.append("Content-Type" ,"application/json");
   }

  getAllFilms$(){
    const url =this.URL_FILMS;
    return this.http.get<any[]>(url,{headers: this.headers});
  }
  getFilm$(filmId){
    const url = this.URL_FILMS+"/"+filmId;
    console.log(url);
    return this.http.get<any>(url,{headers: this.headers});    
  }

}
