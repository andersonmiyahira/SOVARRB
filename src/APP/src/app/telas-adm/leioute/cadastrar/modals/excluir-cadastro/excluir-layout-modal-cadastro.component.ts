import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { LeiouteService } from 'app/telas-adm/leioute/leioute.service';
import { Layout } from '../../../models/layout';
import { LayoutList } from 'app/telas-adm/leioute/models/layout-list';

@Component({
  selector: 'app-excluir-layout-cadastro-modal',
  templateUrl: './excluir-layout-modal-cadastro.component.html',
  styleUrls: ['./excluir-layout-modal-cadastro.component.css']
})
export class ExcluirLayoutCadastroModalComponent implements OnInit {

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

    var indexObjExcluido = this.leioutes.layout.findIndex(_ => _.idLayoutReference == this.model.idLayoutReference);
    this.leioutes.layout.splice(indexObjExcluido, 1);
    this.modalReference.close();
  }
}
