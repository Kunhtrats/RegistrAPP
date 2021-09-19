import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbySettingsPage } from './lobby-settings.page';

const routes: Routes = [
  {
    path: '',
    component: LobbySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobbySettingsPageRoutingModule {}
