import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  URL_GENRES = 'http://localhost:8081/api/genres';
  URL_CLASSIFICATION='http://localhost:8081/api/classification';
  URL_SEARCH= 'http://localhost:8081/apiFilm/search'

  getAllGenres$(){
    const url = this.URL_GENRES;
    return this.http.get<any[]>(url);
  }
  getAllClassification$(){
    const url = this.URL_CLASSIFICATION;
    return this.http.get<any[]>(url);
  }
  findForGenres$(data: any){
    const url = this.URL_SEARCH+"/"+data.genres;
    console.log(url);
    return this.http.get<any[]>(url);
  }  
  findForClassification$(data: any){
    const url = this.URL_SEARCH+"/"+data.classification;
    console.log(url);
    return this.http.get<any[]>(url);
  }  
  findForGenresAndClassification$(data: any){
    const url = this.URL_SEARCH+"/"+data.genres+"/"+data.classification;
    console.log(url);
    return this.http.get<any[]>(url);
  }  
  SearchFilm$(data: any){
    if (data.genres != null || data.classification != null) {
      if (data.genres != null && data.classification != null){
        const url = this.URL_SEARCH+"/"+data.genres+"/"+data.classification;
        console.log(url);
        return this.http.get<any[]>(url);
      }
      if(data.genres != null){
        const url = this.URL_SEARCH+"/"+data.genres+"/"+0;
        console.log(url);
        return this.http.get<any[]>(url);
      }
      if(data.classification != null){
        const url = this.URL_SEARCH+"/"+0+"/"+data.classification;
        console.log(url);
        return this.http.get<any[]>(url);
      }
    }
    else{
      console.log("No hay valores en search de films");
      const url = this.URL_SEARCH+"/"+0+"/"+0;
      return this.http.get<any[]>(url);
    }

  }

}
