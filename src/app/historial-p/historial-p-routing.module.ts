import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPPage } from './historial-p.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPPage,
    children: [
      {
        path: 'entregadas',
        loadChildren: () => import('./entregadas/entregadas.module').then(m => m.EntregadasPageModule)
      },
      {
        path: 'en-proceso',
        loadChildren: () => import('./en-proceso/en-proceso.module').then(m => m.EnProcesoPageModule)
      },
      {
        path: '',
        redirectTo: '/historial-p/entregadas',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPPageRoutingModule { }
