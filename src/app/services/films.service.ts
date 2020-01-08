import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  URL_FILMS = 'http://localhost:8081/api/films';
  URL_ALL_MY_FILMS = 'http://localhost:8081/api/MyFilmsFavorites';
  URL_GENRES = 'http://localhost:8081/api/getFilmGenre';
  URL_COUNTRY = 'http://localhost:8081/api/getFilmCountry';
  URL_ADD_FAVORITE_FILM ='http://localhost:8081/api/postMyFavoriteFilm';
  URL_COUNT_MY_FILMS = 'http://localhost:8081/api/getCountMyFilmsUser';
  URL_DELETE_MY_FILMS = 'http://localhost:8081/api/DeleteMyFilm';
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
  getAllMyFilms$(id_user){
    const url =this.URL_ALL_MY_FILMS+"/"+id_user;
    return this.http.get<any[]>(url);
  }
  postMyFavoriteFilm$(id_film,id_user){
    console.log(id_film)
    console.log(id_user)
    const url = this.URL_ADD_FAVORITE_FILM;
    return this.http.post<any>(url, {"id_user":id_user,"id_film":id_film});
  }
  DeleteMyFavoriteFilm$(id_user,id_film){
    const url = this.URL_DELETE_MY_FILMS+"/"+id_user+"/"+id_film;
    return this.http.get<any>(url);
  }
  getCountMyFilms$(id_user){
    const url =this.URL_COUNT_MY_FILMS+"/"+id_user;
    return this.http.get<any[]>(url);
  }
  getFilmGenre$(id_user){
    const url =this.URL_GENRES+"/"+id_user;
    return this.http.get<any[]>(url);
  }
  getFilmCountry$(id_user){
    const url =this.URL_COUNTRY+"/"+id_user;
    return this.http.get<any[]>(url);
  }

}
