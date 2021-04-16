import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo6PageRoutingModule } from './modelo6-routing.module';

import { Modelo6Page } from './modelo6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo6PageRoutingModule
  ],
  declarations: [Modelo6Page]
})
export class Modelo6PageModule {}
