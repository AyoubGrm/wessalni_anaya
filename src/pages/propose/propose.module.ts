import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposePage } from './propose';

@NgModule({
  declarations: [
    ProposePage,
  ],
  imports: [
    IonicPageModule.forChild(ProposePage),
  ],
})
export class ProposePageModule {}
