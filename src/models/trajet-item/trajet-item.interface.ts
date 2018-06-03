import { DateTime } from "ionic-angular";
import { Time } from "@angular/common";

export interface TrajetItem {
    key?:any;
    idchauf:any;
    num:string;
    ville_depart:string;
    ville_arrive:string;
    date_prevue:DateTime;
    heure:Time;
    place:number;
    prix:number;
    plusinfo:string;
    preference :any;
}
export interface SearchItem{
    ville_depart:any;
    ville_arrive:any;
    date_prevue:DateTime;
    heure:Time;
}

export class UserModel {
    uid?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    providerData?: any;
  }
export class UserMod {
    key?:any;
    Nom: string;
    Prenom: string;
    Num: string;
    Adresse: string;
  }