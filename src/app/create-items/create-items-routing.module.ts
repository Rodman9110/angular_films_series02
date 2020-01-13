import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItemsComponent } from './create-items.component';

const routes: Routes = [{ path: '', component: CreateItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateItemsRoutingModule { }
