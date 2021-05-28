import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductList2PageRoutingModule } from './product-list2-routing.module';

import { ProductList2Page } from './product-list2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductList2PageRoutingModule
  ],
  declarations: [ProductList2Page]
})
export class ProductList2PageModule {}
