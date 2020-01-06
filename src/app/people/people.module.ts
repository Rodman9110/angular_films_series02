import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PeopleModule { }
