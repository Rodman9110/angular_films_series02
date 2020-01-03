import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFilmsRoutingModule } from './my-films-routing.module';
import { MyFilmsComponent } from './my-films.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MyFilmsComponent],
  imports: [
    CommonModule,
    MyFilmsRoutingModule,
    SharedModule,
  ]
})
export class MyFilmsModule { }
