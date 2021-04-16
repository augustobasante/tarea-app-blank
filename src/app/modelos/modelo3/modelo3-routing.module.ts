import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modelo3Page } from './modelo3.page';

const routes: Routes = [
  {
    path: '',
    component: Modelo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modelo3PageRoutingModule {}
