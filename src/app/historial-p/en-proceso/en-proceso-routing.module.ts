import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnProcesoPage } from './en-proceso.page';

const routes: Routes = [
  {
    path: '',
    component: EnProcesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnProcesoPageRoutingModule {}
