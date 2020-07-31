import { Component, OnInit, Input , ViewChild} from '@angular/core';
import { ActorInterface } from 'src/app/Models/Actor';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-actor-table-list',
  templateUrl: './actor-table-list.component.html',
  styleUrls: ['./actor-table-list.component.css']
})
export class ActorTableListComponent implements OnInit {

  
  @Input() actors: ActorInterface[];
  //necesita una interface
  
  dataSource = new MatTableDataSource(this.actors);
  displayedColumns: string[] = ['id','name','img_profile','id_country','date_actor','details'];
  constructor() { }

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  ngOnInit() {
    console.log(this.actors);
    this.dataSource.data = this.actors;
    this.dataSource.paginator = this.paginator;
  }

}
