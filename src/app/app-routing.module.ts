import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'produto1',
    loadChildren: () => import('./produto1/produto1.module').then( m => m.Produto1PageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'produto2',
    loadChildren: () => import('./produto2/produto2.module').then( m => m.Produto2PageModule)
  },  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'product-list2',
    loadChildren: () => import('./product-list2/product-list2.module').then( m => m.ProductList2PageModule)
  },
  {
    path: 'produto3',
    loadChildren: () => import('./produto3/produto3.module').then( m => m.Produto3PageModule)
  },
  {
    path: 'checkout-aroma',
    loadChildren: () => import('./checkout-aroma/checkout-aroma.module').then( m => m.CheckoutAromaPageModule)
  },
  {
    path: 'produto4',
    loadChildren: () => import('./produto4/produto4.module').then( m => m.Produto4PageModule)
  },
  {
    path: 'sacola',
    loadChildren: () => import('./sacola/sacola.module').then( m => m.SacolaPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
