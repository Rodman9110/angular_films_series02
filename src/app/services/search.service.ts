import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  URL_GENRES = 'http://localhost:8081/api/genres';
  URL_CLASSIFICATION='http://localhost:8081/api/classification';
  URL_SEARCH= 'http://localhost:8081/api/search'

  getAllGenres$(){
    const url = this.URL_GENRES;
    return this.http.get<any[]>(url);
  }
  getAllClassification$(){
    const url = this.URL_CLASSIFICATION;
    return this.http.get<any[]>(url);
  }

  findForGenres$(genresId: any){
    const url = this.URL_SEARCH+"/"+genresId.genres;
    console.log(url);
    return this.http.get<any[]>(url);
  }



  

}
