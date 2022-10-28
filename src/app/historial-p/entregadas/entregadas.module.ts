import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregadasPageRoutingModule } from './entregadas-routing.module';

import { EntregadasPage } from './entregadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregadasPageRoutingModule
  ],
  declarations: [EntregadasPage]
})
export class EntregadasPageModule {}
