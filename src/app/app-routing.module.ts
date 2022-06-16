import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
  { path: 'foro', loadChildren: () => import('./foro/foro.module').then(m => m.ForoModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'myfilms', loadChildren: () => import('./my-films/my-films.module').then(m => m.MyFilmsModule) },
  { path: 'mailbox', loadChildren: () => import('./mailbox/mailbox.module').then(m => m.MailboxModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'createItems', loadChildren: () => import('./create-items/create-items.module').then(m => m.CreateItemsModule) },
  { path: 'top', loadChildren: () => import('./top/top.module').then(m => m.TopModule) },
  { path: 'actors', loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule) },
  { path: 'listFilm', loadChildren: () => import('./list-films/list-films.module').then(m => m.ListFilmsModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
