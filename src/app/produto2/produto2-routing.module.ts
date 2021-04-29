import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto2Page } from './produto2.page';

const routes: Routes = [
  {
    path: '',
    component: Produto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto2PageRoutingModule {}
