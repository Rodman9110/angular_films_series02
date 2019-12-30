import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFilmsComponent } from './my-films.component';

const routes: Routes = [{ path: '', component: MyFilmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFilmsRoutingModule { }
