import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsComponent } from './actors.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ActorsComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    SharedModule,
  ]
})
export class ActorsModule { }
