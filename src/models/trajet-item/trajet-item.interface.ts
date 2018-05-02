import { DateTime } from "ionic-angular";
import { Time } from "@angular/common";

export interface TrajetItem {
    key?:string;
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
    ville_depart:string;
    ville_arrive:string;
    date_prevue:DateTime;
    heure:Time;
}
