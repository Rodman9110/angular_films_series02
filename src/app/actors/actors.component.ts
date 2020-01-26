import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorsService } from '../services/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors$: Observable<any[]>;
  constructor( private actorsService: ActorsService) { }

  ngOnInit() {
    this.actors$ = this.actorsService.getAllActorsOrderName$();
  }

  getSearch(event: any){
    console.log(event); 
    this.actors$ = this.actorsService.getSearchActorForName$(event);
  }

}
