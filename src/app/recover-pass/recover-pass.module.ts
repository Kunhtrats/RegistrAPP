import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPASSPageRoutingModule } from './recover-pass-routing.module';

import { RecoverPASSPage } from './recover-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPASSPageRoutingModule
  ],
  declarations: [RecoverPASSPage]
})
export class RecoverPASSPageModule {}
