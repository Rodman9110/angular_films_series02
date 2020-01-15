import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateItemsRoutingModule } from './create-items-routing.module';
import { CreateItemsComponent } from './create-items.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateItemsComponent],
  imports: [
    CommonModule,
    CreateItemsRoutingModule,
    MatTabsModule,
    SharedModule,
    RouterModule,
    MatSnackBarModule
  ]
})
export class CreateItemsModule { }
