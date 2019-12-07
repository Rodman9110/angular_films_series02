import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmComponent } from './film.component';

const routes: Routes = [{ path: '', component: FilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
