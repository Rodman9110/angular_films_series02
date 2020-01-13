import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { ForoComponent } from './foro.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ForoFormComponent } from './foro-form/foro-form.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ForoComponent, CommentCardComponent, ForoFormComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    SharedModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
   
    
  ]
})
export class ForoModule { }
