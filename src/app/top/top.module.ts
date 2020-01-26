import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    SharedModule
  ]
})
export class TopModule { }
