import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: ':filmId', loadChildren: () => import('./film/film.module').then(m => m.FilmModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
