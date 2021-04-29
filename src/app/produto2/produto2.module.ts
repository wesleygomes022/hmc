import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto2PageRoutingModule } from './produto2-routing.module';

import { Produto2Page } from './produto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto2PageRoutingModule
  ],
  declarations: [Produto2Page]
})
export class Produto2PageModule {}
