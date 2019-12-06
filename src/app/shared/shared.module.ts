import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { SeriesListComponent } from './series-list/series-list.component';




@NgModule({
  declarations: [FilmsListComponent, SeriesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [FilmsListComponent, SeriesListComponent]
})
export class SharedModule { }
