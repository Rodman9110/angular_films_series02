import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {

  @Input() actors : any[];
  constructor() { }

  ngOnInit() {
  }

}
