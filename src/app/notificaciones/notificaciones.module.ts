import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificacionesPage } from './notificaciones.page';

import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NotificacionesPageRoutingModule,
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
