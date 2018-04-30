import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Unsubscribe } from '@firebase/util';
import firebase from 'firebase';

import { TrajetItem } from '../../models/trajet-item/trajet-item.interface';


@IonicPage()
@Component({
  selector: 'page-propose',
  templateUrl: 'propose.html',
})
export class ProposePage {
  trajetItem = {} as TrajetItem;
  trajetItemref$: AngularFireList <TrajetItem> 
  constructor(
    private database:AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams) 
    {
    this.trajetItemref$ =this.database.list('trajet-list/'+firebase.auth().currentUser.uid+'/Proposer');
    }

  addtrajetitem(trajetItem:TrajetItem){
    this.trajetItemref$.push(trajetItem);
  }

}
