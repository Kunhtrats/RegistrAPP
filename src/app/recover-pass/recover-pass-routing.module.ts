import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverPASSPage } from './recover-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverPASSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverPASSPageRoutingModule {}
