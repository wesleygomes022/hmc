import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto1Page } from './produto1.page';

const routes: Routes = [
  {
    path: '',
    component: Produto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto1PageRoutingModule {}
