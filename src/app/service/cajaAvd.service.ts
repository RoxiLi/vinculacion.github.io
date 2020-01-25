import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {CajaAvd} from '../models/cajaAvd.model';


@Injectable({
  providedIn: 'root'
})
export class CajaAvdService {
  cajaLst: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase,
              private afs: AngularFirestore){
  }
  getCajaByPerson() {
    return  this.cajaLst = this.firebase.list('caja' , ref => ref.orderByChild('nombre').equalTo('eddi'));
  }
  getCajas() {
    return this.cajaLst = this.firebase.list('caja');
  }
  insertCaja(cajaAvd: CajaAvd) {
    return this.cajaLst.push({
      nombre: cajaAvd.nombre,
      fecha: cajaAvd.fecha,
      tiempo: cajaAvd.tiempo,
      ejercicio: cajaAvd.ejercicio,
      ejercitaciones: cajaAvd.ejercitaciones,
    });
  }
  updateCaja(cajaAvd: CajaAvd ,  id) {
    console.log(id)
    return this.cajaLst.update(id,{
     codigo: cajaAvd.codigo,
     nombre: cajaAvd.nombre,
     ejercicio: cajaAvd.ejercicio,
     ejercitaciones: cajaAvd.ejercitaciones,
     tiempo: cajaAvd.tiempo ,
      fecha: cajaAvd.fecha
    });
  }
  deletePerson($Key: string) {
    this.cajaLst.remove($Key);
  }
}
