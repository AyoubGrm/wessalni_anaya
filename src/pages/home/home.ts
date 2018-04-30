import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrajetsPage } from '../trajets/trajets';
import { SearchPage } from '../search/search';
import { ProposePage } from '../propose/propose';
import { MytrajetsPage } from '../mytrajets/mytrajets';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = TrajetsPage;
  tab2Root = SearchPage; 
  tab3Root = ProposePage;
  tab4Root = MytrajetsPage;
  constructor(
    public navCtrl: NavController,
  ) {}


}
