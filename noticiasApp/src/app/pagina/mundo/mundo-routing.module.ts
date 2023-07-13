import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundoPage } from './mundo.page';

const routes: Routes = [
  {
    path: '',
    component: MundoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MundoPageRoutingModule {}
