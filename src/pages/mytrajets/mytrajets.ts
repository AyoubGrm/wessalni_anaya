import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';

import firebase from 'firebase';
import { TrajetItem } from '../../models/trajet-item/trajet-item.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { UpdateTrajetPage } from '../update-trajet/update-trajet';
import { ReservePage } from '../reserve/reserve';
@IonicPage()
@Component({
  selector: 'page-mytrajets',
  templateUrl: 'mytrajets.html',
})
export class MytrajetsPage {
  itemsRef2: AngularFireList<{}>;
  itemsRef1: AngularFireList<{}>;
  itemsRef: AngularFireList<any>;
  items$:any;
  a:any;
  items: Observable <TrajetItem[]> 
  user:string= firebase.auth().currentUser.email;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl : ModalController,    
    private db:AngularFireDatabase,
    private actionsheetCtrl:ActionSheetController) {

    // this.items$=this.database.list<TrajetItem>('trajet-list/Proposer/'+firebase.auth().currentUser.uid);
    // this.items=this.items$.valueChanges()  ;
    this.itemsRef = this.db.list('trajet-list/Proposer/'+firebase.auth().currentUser.uid);
    this.itemsRef1 = this.db.list('trajet-list/Rechercher');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    
  );
  }

  ionViewDidLoad() {
  //    this.a=this.db.list('userProfile').snapshotChanges()
  // //   . map(changes => 
  // //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      
  // // );
  // // this.db.list('userProfile').query.orderByKey().on("value", function(snapshot) {
  // //   snapshot.forEach(function(childSnapshot) {
  // //                 console.log('Noeud Clé: ' + childSnapshot.key());
  // //                 var noeud = childSnaps // console.log('   Url: ' + noeud.url);
  // //                 // console.log('   Titre: ' + noeud.titre);hot.val();
                 
  // //        });
  // // });
  // console.log(this.a);
  }

  selectrajetItem(trajetItem:TrajetItem){

    this.actionsheetCtrl.create({
      title: 'Mes trajets',
      buttons: [
        {
          text: 'Consulter',
          role: 'destructive',
          handler: () => {
            let departde=this.modalCtrl.create(ReservePage,trajetItem);
            departde.present();
            //console.log(trajetItem);
          }
          },{
          text: 'Modifier',
          role: 'destructive',
          handler: () => {
            let departde=this.modalCtrl.create(UpdateTrajetPage,trajetItem);
            departde.present();
            console.log(trajetItem);
          }
        },{
          text: 'Supprimer',
          handler: () => {
            console.log();
          // console.log(trajetItem);
            console.log(trajetItem.key);
           this.itemsRef.remove(trajetItem.key);
           this.itemsRef1.remove(trajetItem.key);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Vous avez annuler');
          }
        }
      ]
    }).present();
  }

}