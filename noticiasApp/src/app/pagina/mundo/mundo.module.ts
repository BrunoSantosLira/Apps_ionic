import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundoPageRoutingModule } from './mundo-routing.module';

import { MundoPage } from './mundo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundoPageRoutingModule
  ],
  declarations: [MundoPage]
})
export class MundoPageModule {}
