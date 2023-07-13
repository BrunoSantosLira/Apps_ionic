import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalClientePageRoutingModule } from './modal-cliente-routing.module';

import { ModalClientePage } from './modal-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalClientePageRoutingModule
  ],
  declarations: [ModalClientePage]
})
export class ModalClientePageModule {}
