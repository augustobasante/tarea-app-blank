import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modelo5PageRoutingModule } from './modelo5-routing.module';

import { Modelo5Page } from './modelo5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modelo5PageRoutingModule
  ],
  declarations: [Modelo5Page]
})
export class Modelo5PageModule {}
