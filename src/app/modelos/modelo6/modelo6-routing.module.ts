import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modelo6Page } from './modelo6.page';

const routes: Routes = [
  {
    path: '',
    component: Modelo6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modelo6PageRoutingModule {}
