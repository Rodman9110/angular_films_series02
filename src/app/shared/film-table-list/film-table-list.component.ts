import { Component, OnInit, Input } from '@angular/core';
import { FilmInterface } from 'src/app/Models/Film';

@Component({
  selector: 'app-film-table-list',
  templateUrl: './film-table-list.component.html',
  styleUrls: ['./film-table-list.component.css']
})
export class FilmTableListComponent implements OnInit {


  @Input() films: FilmInterface[];
  dataSource = this.films;
  displayedColumns: string[] = ['id','name','date_film','poster_film'];
  constructor() { }

  ngOnInit() {
    console.log(this.films)
    this.dataSource = this.films;
  }

}
