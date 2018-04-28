import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { ProposePage }from '../propose/propose';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-trajets',
  templateUrl: 'trajets.html',
})
export class TrajetsPage {

  constructor(private authProvider:AuthProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrajetsPage');
  }
  async logOut(): Promise<void> {
    await this.authProvider.logoutUser();
    this.navCtrl.setRoot('LoginPage');
  }

  propose(){
    this.navCtrl.push(ProposePage);
  }

  search(){
    this.navCtrl.push(SearchPage);
  }

}
