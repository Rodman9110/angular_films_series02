import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFilmsRoutingModule } from './my-films-routing.module';
import { MyFilmsComponent } from './my-films.component';


@NgModule({
  declarations: [MyFilmsComponent],
  imports: [
    CommonModule,
    MyFilmsRoutingModule
  ]
})
export class MyFilmsModule { }
