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
import { UserListNotFriendComponent } from './user-list-not-friend/user-list-not-friend.component';
import { UserListPendingRequestsComponent } from './user-list-pending-requests/user-list-pending-requests.component';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent, UserListNotFriendComponent, UserListPendingRequestsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule
    
  ],
  exports: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent, UserListNotFriendComponent, UserListPendingRequestsComponent]
})
export class SharedModule { }
