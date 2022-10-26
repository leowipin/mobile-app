import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnProcesoPageRoutingModule } from './en-proceso-routing.module';

import { EnProcesoPage } from './en-proceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnProcesoPageRoutingModule
  ],
  declarations: [EnProcesoPage]
})
export class EnProcesoPageModule {}
