import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController,NavParams , ModalController } from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';

import {  SearchItem } from '../../models/trajet-item/trajet-item.interface';
import { SearchresultPage } from '../searchresult/searchresult';
import { AutocompletePage } from '../autocomplete/autocomplete';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})

export class SearchPage {
 //@ViewChild('search') searchElementRef: ElementRef;
  searchItem={} as SearchItem;
   public searchControl: FormControl;
    place:any;
   constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ,
    public modalCtrl: ModalController) { }

  depart(searchItem:SearchItem){
    let departde=this.modalCtrl.create(SearchresultPage,searchItem);
    departde.present();
  }
  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.searchItem.ville_depart = data;
    });
    modal.present();
    console.log("yaaaaaaaaaw");
  }

  ngAfterViewInit() {
//     var input = document.getElementById('autocomplete1').getElementsByTagName('input')[0];
//     var options = {componentRestrictions: {country: 'us'}};
//     new google.maps.places.Autocomplete(input);
    var input2 = document.getElementById('autocomplete2').getElementsByTagName('input')[0];
    var options2 = {componentRestrictions: {country: 'dz'}};
  let auto= new google.maps.places.Autocomplete(input2);
   
//   //   // this.searchItem.ville_arrive= auto.getPlace();
//   //     this.place = auto.getPlace();
//   //  // console.log(place);
}

  // ngOnInit() {

  //   this.searchControl = new FormControl();

  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
  
  //   });
  // }
}
