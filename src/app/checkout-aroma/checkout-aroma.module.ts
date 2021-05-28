import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutAromaPageRoutingModule } from './checkout-aroma-routing.module';

import { CheckoutAromaPage } from './checkout-aroma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutAromaPageRoutingModule
  ],
  declarations: [CheckoutAromaPage]
})
export class CheckoutAromaPageModule {}
