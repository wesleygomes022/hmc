import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produto3PageRoutingModule } from './produto3-routing.module';

import { Produto3Page } from './produto3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produto3PageRoutingModule
  ],
  declarations: [Produto3Page]
})
export class Produto3PageModule {}
