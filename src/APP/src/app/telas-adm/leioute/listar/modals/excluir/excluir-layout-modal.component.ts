import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { LeiouteService } from 'app/telas-adm/leioute/leioute.service';
import { Layout } from '../../../models/layout';
import { LayoutList } from 'app/telas-adm/leioute/models/layout-list';

@Component({
  selector: 'app-excluir-layout-modal',
  templateUrl: './excluir-layout-modal.component.html',
  styleUrls: ['./excluir-layout-modal.component.css']
})
export class ExcluirLayoutModalComponent implements OnInit {

  @ViewChild('excludeModalId') modal: NgbModal;

  bancos: Array<Banco>;
  model: Layout;
  leioutes: LayoutList;

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal,
              private leiouteService: LeiouteService) {
  }

  ngOnInit() {

  }

  openModal(model) {

    this.model = model;
    this.modalReference = this.modalService.open(this.modal, { size: 'sm' });
  }

  excluir() {
    
    this.leiouteService.excluirBanco(this.model).subscribe(()=>{
      var indexObjExcluido = this.leioutes.layout.findIndex(_ => _.idLayout == this.model.idLayout);
      this.leioutes.layout.splice(indexObjExcluido, 1);
      this.modalReference.close();
    }); 
  }
}
