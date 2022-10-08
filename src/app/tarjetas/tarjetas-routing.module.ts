import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetasPage } from './tarjetas.page';

const routes: Routes = [
  {
    path: '',
    children:[{
      path: 'agregar-tarjeta',
      loadChildren: () => import('../agregar-tarjeta/agregar-tarjeta.module').then( m => m.AgregarTarjetaPageModule)
    },
    {
      path:'',
      component: TarjetasPage
    }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetasPageRoutingModule {}
