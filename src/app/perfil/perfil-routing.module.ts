import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'tarjetas',
        loadChildren: () => import('../tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
      },
      {
        path: '',
        component: PerfilPage
      },
      {
        path: 'historial-p',
        loadChildren: () => import('../historial-p/historial-p.module').then( m=> m.HistorialPPageModule)
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
