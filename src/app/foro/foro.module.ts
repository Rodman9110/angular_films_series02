import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { ForoComponent } from './foro.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommentCardComponent } from './comment-card/comment-card.component';


@NgModule({
  declarations: [ForoComponent, CommentCardComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ForoModule { }
