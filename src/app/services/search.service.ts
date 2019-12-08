import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  URL_GENRES = 'http://localhost:8081/api/genres';

  getAllGenres$(){
    const url = this.URL_GENRES;
    return this.http.get<any[]>(url);
  }

  

}
