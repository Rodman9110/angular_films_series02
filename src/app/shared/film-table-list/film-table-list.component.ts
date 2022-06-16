import { Component, OnInit, Input, ViewChild ,Inject, Output,EventEmitter} from '@angular/core';
import { FilmInterface } from 'src/app/Models/Film';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/services/companies.service';
import { CompaniesInterface } from 'src/app/Models/Companies';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-film-table-list',
  templateUrl: './film-table-list.component.html',
  styleUrls: ['./film-table-list.component.css']
})
export class FilmTableListComponent implements OnInit {

  
  @Input() films;
  @Input() companies: CompaniesInterface[];
  @Input() filmCompanies;
  @Output() filmEmitEdit= new EventEmitter<FilmInterface>();
  @Output() filmEmitNew = new EventEmitter<FilmInterface>();
  
  dataSource = new MatTableDataSource(this.films);
  displayedColumns: string[] = ['id','name','date_film','poster_film','editar'];


  film: FilmInterface;
  name: string;
  id: number;
  description: string;
  

  constructor(
    private companiesService: CompaniesService,
    public dialog: MatDialog
    ) {}

  length = 100;
  pageSize = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  public dialojActivate=false;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  ngOnInit() {
    this.dataSource.data = this.films;
    this.dataSource.paginator = this.paginator;
  }

  editDialoj(element: FilmInterface): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '850px',
      data: {
        name: element.name,
        description: element.description,
        id: element.id,
        changeDialog: true
        }
    });

    dialogRef.afterClosed().subscribe(result => {
        if( result !== undefined ){
          this.filmEmitEdit.emit(result);
        } 
        else{
          console.log("ddd");
        }
      }
    );
   
  }

  nuevoFilmDialoj(): void{
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '850px',
      data:{
        changeDialog: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        if( result !== undefined){
          this.filmEmitNew.emit(result);
        } 
      }
    );

  }

}

