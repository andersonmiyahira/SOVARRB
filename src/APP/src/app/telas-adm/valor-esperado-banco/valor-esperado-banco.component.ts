import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { ValorEsperadoBancoService } from './valor-esperado-banco.service';

@Component({
  selector: 'app-valor-esperado-banco',
  templateUrl: './valor-esperado-banco.component.html',
  styleUrls: ['./valor-esperado-banco.component.css']
})
export class ValorEsperadoBancoComponent implements OnInit {
  bancos: any;
  valoresEsperados: any;

  id: number;

  constructor(private valorEsperadoBancoService: ValorEsperadoBancoService,
    private modalService: NgbModal) {
    this.id = 0;
    this.valoresEsperados = [];
  }

  ngOnInit() {
    this.obterBancos();
    this.obterValoresEsperados();
  }

  obterBancos() {
    this.valorEsperadoBancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterValoresEsperados() {
    this.valorEsperadoBancoService.obterValoresEsperados().subscribe(response => {
      this.valoresEsperados = response;
    });
  }

  novoOpenModal(content) {
    this.id = 0;
    this.modalService.open(content, { size: 'lg' });
  }

  editarOpenModal(content, idBanco) {
    this.id = idBanco;
    this.modalService.open(content, { size: 'lg' });
  }

  excludeOpenModal(excluir, banco) {
    //this.bancos.splice(banco);
    this.modalService.open(excluir, { size: 'lg' });
  }

  excluir() {

  }

  salvar() {

  }

}
