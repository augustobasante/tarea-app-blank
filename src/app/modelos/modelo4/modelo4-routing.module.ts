import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modelo4Page } from './modelo4.page';

const routes: Routes = [
  {
    path: '',
    component: Modelo4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modelo4PageRoutingModule {}
