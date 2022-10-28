import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: 'carro',
    loadChildren: () => import('../carro/carro.module').then(m => m.CarroPageModule)
  },
  {
    path: '',

    children: [
      {
        path: 'product-detail',
        loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
      },
      {
        path: '',
        component: InicioPage
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioPageRoutingModule { }
