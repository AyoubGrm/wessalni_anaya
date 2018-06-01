import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';

import { TrajetItem } from '../../models/trajet-item/trajet-item.interface';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-propose',
  templateUrl: 'propose.html',
})
export class ProposePage {
  items: Observable<TrajetItem[]>;
  trajetItem = {} as TrajetItem;
  trajetItemref$: AngularFireList <TrajetItem> 
  trajetItemref1$: AngularFireList <TrajetItem> 
  constructor(
    private database:AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) 
   
    {
      this.trajetItemref$ =this.database.list('trajet-list/Proposer/'+firebase.auth().currentUser.uid);
      this.trajetItemref1$ =this.database.list('trajet-list/Rechercher');
    
    }

  addtrajetitem(trajetItem:TrajetItem){
   // this.trajetItemref$.update(firebase.auth().currentUser.uid,trajetItem);
   trajetItem.idchauf=firebase.auth().currentUser.uid;
   this.trajetItemref$.push(trajetItem);
   this.trajetItemref1$.push(trajetItem);
  }
  
  // edittrajetitem(trajetItem:TrajetItem){
  //   var newPostKey = firebase.database().ref().child('trajet-list/Proposer').push().key;
  //   firebase.database().ref(newPostKey).set(trajetItem);  
  //   console.log(newPostKey);    
  // }


  showAddressDepart () {
    let modal = this.modalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.trajetItem.ville_depart = data;
    });
    modal.present();
  }
  showAddressArrive () {
    let modal = this.modalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.trajetItem.ville_arrive = data;
    });
    modal.present();
  }

}
