import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregadasPage } from './entregadas.page';

const routes: Routes = [
  {
    path: '',
    component: EntregadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregadasPageRoutingModule {}
