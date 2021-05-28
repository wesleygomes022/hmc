import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto4Page } from './produto4.page';

const routes: Routes = [
  {
    path: '',
    component: Produto4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto4PageRoutingModule {}
