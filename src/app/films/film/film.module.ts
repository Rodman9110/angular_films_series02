import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [FilmComponent, FilmCardComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
  ]
})
export class FilmModule { }
