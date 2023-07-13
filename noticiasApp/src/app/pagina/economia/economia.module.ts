import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomiaPageRoutingModule } from './economia-routing.module';

import { EconomiaPage } from './economia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EconomiaPageRoutingModule
  ],
  declarations: [EconomiaPage]
})
export class EconomiaPageModule {}
