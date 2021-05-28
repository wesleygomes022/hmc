import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductList2Page } from './product-list2.page';

const routes: Routes = [
  {
    path: '',
    component: ProductList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductList2PageRoutingModule {}
