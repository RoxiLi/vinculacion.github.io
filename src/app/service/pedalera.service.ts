import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
// modelo
import {Pedalera} from '../models/pedalera.model';


@Injectable({
  providedIn: 'root'
})
export class PedaleraService {
  pedaleraLst: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private afs: AngularFirestore){
  }
  getPedaleraByPerson() {
   return  this.pedaleraLst = this.firebase.list('pedalera' , ref => ref.orderByChild('nombre').equalTo('eddi'));
  }
  getPedaleras() {
    return this.pedaleraLst = this.firebase.list('pedalera');
  }
  insertCaja(pedalera: Pedalera) {
    return this.pedaleraLst.push({
      nombre: pedalera.nombre,
      pedaleadas : pedalera.pedaleadas,
      fecha: pedalera.fecha
    });
  }
}
