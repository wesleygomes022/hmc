import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto1PageRoutingModule } from './produto1-routing.module';

import { Produto1Page } from './produto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto1PageRoutingModule
  ],
  declarations: [Produto1Page]
})
export class Produto1PageModule {}
