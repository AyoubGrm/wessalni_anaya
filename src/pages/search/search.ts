import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import {  SearchItem } from '../../models/trajet-item/trajet-item.interface';
import { SearchresultPage } from '../searchresult/searchresult';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchItem={} as SearchItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,) { }

  search(searchItem:SearchItem){
    console.log(searchItem);
    this.navCtrl.push(SearchresultPage,searchItem);
  }
}
