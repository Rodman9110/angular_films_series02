import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  URL_ADD_FILM_LIKE ='http://localhost:8081/like/AddFilmLike';
  URL_COUNT_FILM_LIKE = 'http://localhost:8081/like/getCountFilmLike';
  URL_COUNT_ALL_FILM_LIKE ='http://localhost:8081/like/getCountAllFilmLike';
  constructor(private http:HttpClient) { }

  postFilmLike$(id_user,id_film){
    const url = this.URL_ADD_FILM_LIKE;
    return this.http.post<any>(url, {"id_user":id_user,"id_film":id_film});
  }
  getCountFilmLikes(id_film){
    const url = this.URL_COUNT_FILM_LIKE+"/"+id_film;
    return this.http.get<any>(url);
  }
  getCountAllFilmLike$(){
    const url = this.URL_COUNT_FILM_LIKE;
    return this.http.get<any>(url);
  }

}
