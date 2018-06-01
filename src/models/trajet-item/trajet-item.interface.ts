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

export interface CommuneItem{
    id:number;
    code_postal:number;
    nom:string;
    wilaya_id:number;
}
export class UserModel {
    uid?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    providerData?: any;
  }
export class UserMod {
    Nom: string;
    Prenom: string;
    Num: string;
    Adresse: string;
  }