import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPPageRoutingModule } from './historial-p-routing.module';

import { HistorialPPage } from './historial-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPPageRoutingModule
  ],
  declarations: [HistorialPPage]
})
export class HistorialPPageModule {}
