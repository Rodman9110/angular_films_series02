import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FilmInterface } from 'src/app/Models/Film';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-film-table-list',
  templateUrl: './film-table-list.component.html',
  styleUrls: ['./film-table-list.component.css']
})
export class FilmTableListComponent implements OnInit {


  @Input() films: FilmInterface[];
  
  dataSource = new MatTableDataSource(this.films);
  displayedColumns: string[] = ['id','name','date_film','poster_film'];
  constructor() {}

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  ngOnInit() {
    console.log(this.films);
    this.dataSource.data = this.films;
    this.dataSource.paginator = this.paginator;
  }

}
