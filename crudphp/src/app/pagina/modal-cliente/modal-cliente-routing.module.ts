import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalClientePage } from './modal-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ModalClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalClientePageRoutingModule {}
