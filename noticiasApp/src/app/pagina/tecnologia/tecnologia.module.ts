import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiaPageRoutingModule } from './tecnologia-routing.module';

import { TecnologiaPage } from './tecnologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiaPageRoutingModule
  ],
  declarations: [TecnologiaPage]
})
export class TecnologiaPageModule {}
