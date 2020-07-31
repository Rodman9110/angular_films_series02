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
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchSharedComponent } from './search-shared/search-shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FilmFormComponent } from './film-form/film-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { ActorTableListComponent } from './actor-table-list/actor-table-list.component';
import {MatTableModule} from '@angular/material/table';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilmActorFormComponent } from './film-actor-form/film-actor-form.component';
import { FilmTableListComponent } from './film-table-list/film-table-list.component';
import { TopFilmsComponent } from './top-films/top-films.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';









@NgModule({
  declarations: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent, UserListNotFriendComponent, UserListPendingRequestsComponent, SearchSharedComponent, FilmFormComponent, ActorFormComponent, ActorTableListComponent, AlertConfirmComponent, FilmActorFormComponent, FilmTableListComponent, TopFilmsComponent, ActorsListComponent, ProfileUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule ,
    MatDatepickerModule,
    MatFileUploadModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule
    
    // material modules
   
    
  ],
  exports: [FilmsListComponent, SeriesListComponent,LoadingComponent, CommentListComponent, GenresComponent, CommentListMailboxComponent, UserListNotFriendComponent, UserListPendingRequestsComponent, SearchSharedComponent, FilmFormComponent, ActorFormComponent, ActorTableListComponent, AlertConfirmComponent, FilmActorFormComponent, FilmTableListComponent, TopFilmsComponent, ActorsListComponent, ProfileUserComponent]
})
export class SharedModule { }
