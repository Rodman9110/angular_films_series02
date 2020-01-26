import { Component, OnInit, Input } from '@angular/core';
import { FilmInterface } from 'src/app/Models/Film';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {

  @Input() films: FilmInterface[];
  dataSource = this.films;
  displayedColumns: string[] = ['id','name','date_film','poster_film'];
  constructor() { }

  ngOnInit() {
  }

}
