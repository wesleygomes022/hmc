import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produto3Page } from './produto3.page';

const routes: Routes = [
  {
    path: '',
    component: Produto3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produto3PageRoutingModule {}
