import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo4PageRoutingModule } from './modelo4-routing.module';

import { Modelo4Page } from './modelo4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo4PageRoutingModule
  ],
  declarations: [Modelo4Page]
})
export class Modelo4PageModule {}
