import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController,NavParams , ModalController } from 'ionic-angular';

import {  SearchItem } from '../../models/trajet-item/trajet-item.interface';
import { SearchresultPage } from '../searchresult/searchresult';
import { AutocompletePage } from '../autocomplete/autocomplete';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})

export class SearchPage {
  searchItem={} as SearchItem;
   public searchControl: FormControl;
    place:any;
   constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) { }

  depart(searchItem:SearchItem){
    let departde=this.modalCtrl.create(SearchresultPage,searchItem);
    departde.present();
  }
  showAddressDepart () {
    let modal = this.modalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.searchItem.ville_depart = data;
    });
    modal.present();
  }
  showAddressArrive () {
    let modal = this.modalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.searchItem.ville_arrive = data;
    });
    modal.present();
  }

}