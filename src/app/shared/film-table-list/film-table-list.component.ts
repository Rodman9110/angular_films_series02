import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FilmInterface } from 'src/app/Models/Film';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/services/companies.service';
import { CompaniesInterface } from 'src/app/Models/Companies';



@Component({
  selector: 'app-film-table-list',
  templateUrl: './film-table-list.component.html',
  styleUrls: ['./film-table-list.component.css']
})
export class FilmTableListComponent implements OnInit {


  @Input() films: FilmInterface[];
  @Input() companies: CompaniesInterface[];
  @Input() filmCompanies;
  
  dataSource = new MatTableDataSource(this.films);
  displayedColumns: string[] = ['id','name','date_film','poster_film'];

  constructor(private companiesService: CompaniesService) {}

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  ngOnInit() {
    console.log(this.films);
    console.log(this.companies);
    console.log(this.filmCompanies);
    this.dataSource.data = this.films;
    this.dataSource.paginator = this.paginator;
  }
}
