import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modelo5Page } from './modelo5.page';

const routes: Routes = [
  {
    path: '',
    component: Modelo5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modelo5PageRoutingModule {}
