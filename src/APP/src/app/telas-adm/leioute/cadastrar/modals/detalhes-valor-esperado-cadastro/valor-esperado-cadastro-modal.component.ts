import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { ValorEsperado } from 'app/telas-adm/valor-esperado-banco/model/valor-esperado';
import { ValorEsperadoBancoService } from 'app/telas-adm/valor-esperado-banco/valor-esperado-banco.service';
import { Layout } from 'app/telas-adm/leioute/models/layout';

@Component({
  selector: 'app-valor-esperado-cadastro-modal',
  templateUrl: './valor-esperado-cadastro-modal.component.html',
  styleUrls: ['./valor-esperado-cadastro-modal.component.css']
})
export class DetalheValorEsperadoCadastroComponent implements OnInit {

  @ViewChild('modal') modal: NgbModal;
  listValorEsperado: boolean;
  valoresEsperadorPorBanco: Array<ValorEsperado>;

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal,
    private valorEsperadoBancoService: ValorEsperadoBancoService) {
    this.valoresEsperadorPorBanco = new Array<ValorEsperado>();
  }

  ngOnInit() {

  }

  openModal(model: any, edit: boolean) {
    debugger
    if (model) {
      let filter = new ValorEsperado();
      filter.bancoId = parseInt(model.bancoId);

      this.valorEsperadoBancoService.obterValoresEsperadosPorFiltros(filter).subscribe(response => {

        console.log(model)
        this.valoresEsperadorPorBanco = response;
        this.modalReference = this.modalService.open(this.modal, { size: 'lg' });
      });
    }
    else {
      this.modalReference = this.modalService.open(this.modal, { size: 'lg' });
    }

  }
}
