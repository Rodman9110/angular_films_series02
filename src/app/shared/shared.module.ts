import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoadingComponent } from './loading/loading.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { GenresComponent } from './genres/genres.component';
import { CommentListMailboxComponent } from './comment-list-mailbox/comment-list-mailbox.component';





@NgModule({
  declarations: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent]
})
export class SharedModule { }
