import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../inicio/inicio.module').then((m) => m.InicioPageModule),
      },
      {
        path: 'favoritos',
        loadChildren: () =>
          import('../favoritos/favoritos.module').then((m) => m.FavoritosPageModule),
      },
      {
        path: 'notificaciones',
        loadChildren: () =>
          import('../notificaciones/notificaciones.module').then((m) => m.NotificacionesPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
