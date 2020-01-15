import { Component, OnInit, Input } from '@angular/core';
import { ActorInterface } from 'src/app/Models/Actor';

@Component({
  selector: 'app-actor-table-list',
  templateUrl: './actor-table-list.component.html',
  styleUrls: ['./actor-table-list.component.css']
})
export class ActorTableListComponent implements OnInit {

  
  @Input() actors: ActorInterface[];
  //necesita una interface
  
  dataSource = this.actors;
  displayedColumns: string[] = ['id','name','img_profile','id_country','date_actor','details'];
  constructor() { }

  ngOnInit() {
    console.log(this.actors);
    this.dataSource = this.actors;
  }

}
