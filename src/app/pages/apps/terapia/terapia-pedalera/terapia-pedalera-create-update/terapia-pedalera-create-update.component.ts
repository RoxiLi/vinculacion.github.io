import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import {Pedalera} from '../../../../../models/pedalera.model';
import {CajaAvd} from '../../../../../models/cajaAvd.model';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icDescription from '@iconify/icons-ic/twotone-description';
import icPerson from '@iconify/icons-ic/twotone-person';

@Component({
  selector: 'vex-terapia-pedalera-create-update',
  templateUrl: './terapia-pedalera-create-update.component.html',
  styleUrls: ['./terapia-pedalera-create-update.component.scss']
})
export class TerapiaPedaleraCreateUpdateComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icPerson = icPerson;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icAssignment = icAssignment;
  icDescription = icDescription;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pedalera = Pedalera
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<TerapiaPedaleraCreateUpdateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as CajaAvd;
    }
    this.form = this.fb.group({
      nombre : this.defaults.nombre || '',
      pedaleadas: this.defaults.pedaleadas || '',
      fecha: this.defaults.fecha || ''
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createCaja();
    } else if (this.mode === 'update') {
      this.updatePedalera();
    }
  }
  createCaja() {
    const pedalera = this.form.value;
    this.dialogRef.close(pedalera);
  }
  updatePedalera() {
    const pedalera = this.form.value;
    this.pedalera = this.form.value;
    console.log('Aui');
    console.log(this.pedalera);
    this.dialogRef.close(pedalera);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }

}
