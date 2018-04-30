import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { TrajetItem } from '../../models/trajet-item/trajet-item.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-mytrajets',
  templateUrl: 'mytrajets.html',
})
export class MytrajetsPage {
  items: Observable <TrajetItem[]> 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database:AngularFireDatabase) {

    this.items=this.database.list<TrajetItem>('trajet-list/'+firebase.auth().currentUser.uid+'/Proposer').valueChanges();
    
      
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

}
