import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { ValorEsperado } from 'app/telas-adm/valor-esperado-banco/model/valor-esperado';

@Component({
  selector: 'app-valor-esperado-cadastro-modal',
  templateUrl: './valor-esperado-cadastro-modal.component.html',
  styleUrls: ['./valor-esperado-cadastro-modal.component.css']
})
export class DetalheValorEsperadoCadastroComponent implements OnInit {

  @ViewChild('modal') modal: NgbModal;
  listValorEsperado: boolean;

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {

  }

  openModal() {
debugger
    this.modalReference = this.modalService.open(this.modal, { size: 'lg' });
  }
}
