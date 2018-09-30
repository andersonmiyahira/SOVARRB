import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { ValorEsperado } from 'app/telas-adm/valor-esperado-banco/model/valor-esperado';

@Component({
  selector: 'app-valor-esperado-modal',
  templateUrl: './valor-esperado-modal.component.html',
  styleUrls: ['./valor-esperado-modal.component.css']
})
export class DetalheValorEsperadoComponent implements OnInit {

  @ViewChild('modal') modal: NgbModal;
  valoresEsperados: Array<ValorEsperado>;

  private modalReference: NgbModalRef;

  constructor(private router: Router,
    private bancoService: BancoService,
    private modalService: NgbModal) {
  }

  ngOnInit() {

  }

  openModal() {
    this.modalReference = this.modalService.open(this.modal, { size: 'lg' });
  }
}
