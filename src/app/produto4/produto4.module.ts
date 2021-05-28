import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto4PageRoutingModule } from './produto4-routing.module';

import { Produto4Page } from './produto4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto4PageRoutingModule
  ],
  declarations: [Produto4Page]
})
export class Produto4PageModule {}
