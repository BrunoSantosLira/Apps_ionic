import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomiaPage } from './economia.page';

const routes: Routes = [
  {
    path: '',
    component: EconomiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomiaPageRoutingModule {}
