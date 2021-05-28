import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutAromaPage } from './checkout-aroma.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutAromaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutAromaPageRoutingModule {}
