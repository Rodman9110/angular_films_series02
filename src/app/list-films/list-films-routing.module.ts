import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFilmsComponent } from './list-films.component';

const routes: Routes = [{ path: '', component: ListFilmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFilmsRoutingModule { }
