import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaPage } from './tecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiaPageRoutingModule {}
