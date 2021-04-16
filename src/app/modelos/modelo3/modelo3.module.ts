import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo3PageRoutingModule } from './modelo3-routing.module';

import { Modelo3Page } from './modelo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo3PageRoutingModule
  ],
  declarations: [Modelo3Page]
})
export class Modelo3PageModule {}
