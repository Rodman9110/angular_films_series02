import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFilmsRoutingModule } from './list-films-routing.module';
import { ListFilmsComponent } from './list-films.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [ListFilmsComponent],
  imports: [
    CommonModule,
    ListFilmsRoutingModule,
    MatTabsModule,
    SharedModule,
    RouterModule,
    MatSnackBarModule
  ]
})
export class ListFilmsModule { }
