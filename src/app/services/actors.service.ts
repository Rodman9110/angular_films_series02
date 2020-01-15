import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  URL_GET_ALL_ACTORS = 'http://localhost:8081/actors/getAllActors';
  URL_GET_ACTOR_FILM = 'http://localhost:8081/actors/getAllActorsFilm';
  URL_ADD_ACTOR = 'http://localhost:8081/actors/postAddActor';
  URL_ADD_ACTOR_FILM = 'http://localhost:8081/actors/postAddActorFilm';

  constructor(private http: HttpClient) { }

  getAllActors$(){
    const url =this.URL_GET_ALL_ACTORS;
    return this.http.get<any[]>(url);
  }
  getAllActoresFilm$(id_film){
    const url =this.URL_GET_ACTOR_FILM+"/"+id_film;
    return this.http.get<any[]>(url);
  }
  postAddActor(actor: any){
    const url =this.URL_ADD_ACTOR;
    console.log(actor);
    return this.http.post<any>(url,actor);
  }
  postAddActorFilm(filmActor: any){
    const url =this.URL_ADD_ACTOR_FILM;
    console.log(filmActor);
    return this.http.post<any>(url,filmActor);

  }
  
}
