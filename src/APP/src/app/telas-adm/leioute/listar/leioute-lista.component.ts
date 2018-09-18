import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { ImportarArquivoService } from 'app/telas-gerais/importar-arquivo/importar-arquivo.service';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {
  bancos: any;
  cnabs: any;
  leioutes: any;

  optionsModel: number[];
  valoresEsperados: IMultiSelectOption[];

  constructor(private router: Router,
    private LeiouteService: LeiouteService,
    private importarArquivoService: ImportarArquivoService,
    private modalService: NgbModal) {
    this.leioutes = {};
    this.leioutes.header = [];
    this.leioutes.detalhe = [];
    this.leioutes.trailer = [];
  }

  ngOnInit() {
    this.obterBancos();
    this.obterCNAB();
    this.obterValoresEsperados();
  }

  novoLeioute() {
    this.router.navigate(['leioute-cadastrar']);
  }

  buscarLeioute() {
    this.obterLeioutes();
  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterValoresEsperados() {
    this.valoresEsperados = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' }
    ]
  }

  editar(editarModal) {
    this.modalService.open(editarModal, { size: 'lg' });
  }

  exclude(excluir, banco) {
    this.modalService.open(excluir, { size: 'sm' });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }

  obterLeioutes() {
    this.LeiouteService.obterLeioutes().subscribe(response => {
      this.leioutes.header = response.filter(x => x["tipo"] == 1);
      this.leioutes.detalhe = response.filter(x => x["tipo"] == 2);
      this.leioutes.trailer = response.filter(x => x["tipo"] == 3);
    });
  }

  detalhesValoresEsperados(detalhesValorEsperado) {
    this.modalService.open(detalhesValorEsperado, { size: 'lg' });
  }
}
