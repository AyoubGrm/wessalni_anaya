import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  SearchItem } from '../../models/trajet-item/trajet-item.interface';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchItem={} as SearchItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  search(searchItem:SearchItem){
    console.log(this.searchItem);
  }
}
