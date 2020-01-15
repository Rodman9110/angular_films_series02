import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule,
    RouterModule,
    MatSnackBarModule
  ]
})
export class FilmsModule { }
