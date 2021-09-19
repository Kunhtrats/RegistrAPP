import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LobbySettingsPageRoutingModule } from './lobby-settings-routing.module';

import { LobbySettingsPage } from './lobby-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbySettingsPageRoutingModule
  ],
  declarations: [LobbySettingsPage]
})
export class LobbySettingsPageModule {}
