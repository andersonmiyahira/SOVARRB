import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { LeiouteService } from 'app/telas-adm/leioute/leioute.service';
import { Layout } from '../../../models/layout';
import { LayoutList } from 'app/telas-adm/leioute/models/layout-list';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-layout-modal',
  templateUrl: './editar-layout-modal.component.html',
  styleUrls: ['./editar-layout-modal.component.css']
})
export class EditarLayoutModalComponent implements OnInit {

  @ViewChild('editarModal') modal: NgbModal;

  public form: FormGroup;

  model: Layout;
  leioutes: LayoutList;
  options: IMultiSelectOption[];

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal,
    private leiouteService: LeiouteService) {
  }

  ngOnInit() {
  }

  initFomControl() {

    this.form = new FormGroup({
      descricao: new FormControl(this.model.descricao, [
        Validators.required
      ]),
      posicaoDe: new FormControl(this.model.posicaoDe, [
        Validators.required
      ]),
      posicaoAte: new FormControl(this.model.posicaoAte, [
        Validators.required
      ]),
      obrigatorio: new FormControl(this.model.obrigatorio, [
        Validators.required
      ]),
      valorEsperado: new FormControl(this.model.valoresEsperados, [
        Validators.required
      ]),
      tipoCampoId: new FormControl(this.model.tipoCampoId, [
        Validators.required
      ]),
      idValoresEsperados: new FormControl(this.model.idValoresEsperados, [
        Validators.required
      ]),
      tipoRegistroFlag: new FormControl(this.model.tipoRegistroFlag, [
        Validators.required
      ])
    });
  }


  openModal(model) {

    this.model = model;
    this.initFomControl();
    this.modalReference = this.modalService.open(this.modal, { size: 'lg' });
  }

  salvar() {

    this.leiouteService.atualizarLayout(this.model).subscribe(res =>{
      var indexObjAtualizado = this.leioutes.layout.findIndex(_ => _.idLayout == this.model.idLayout);
      this.leioutes.layout[indexObjAtualizado] = res;
      this.modalReference.close();
    });
  }
}
