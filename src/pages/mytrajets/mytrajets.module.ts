import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytrajetsPage } from './mytrajets';

@NgModule({
  declarations: [
    MytrajetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MytrajetsPage),
  ],
})
export class MytrajetsPageModule {}
