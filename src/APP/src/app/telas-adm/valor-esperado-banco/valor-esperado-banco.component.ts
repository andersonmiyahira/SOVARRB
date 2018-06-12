import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValorEsperadoBancoService } from './valor-esperado-banco.service';

@Component({
  selector: 'app-valor-esperado-banco',
  templateUrl: './valor-esperado-banco.component.html',
  styleUrls: ['./valor-esperado-banco.component.css']
})
export class ValorEsperadoBancoComponent implements OnInit {
  bancos: any;
  cnabs: any;
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
    this.obterCNABS();
  }

  obterBancos() {
    this.valorEsperadoBancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterCNABS() {
    this.valorEsperadoBancoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
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
