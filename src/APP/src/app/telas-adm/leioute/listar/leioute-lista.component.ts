import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";
import { ImportarArquivoService } from '../../../importar-arquivo/importar-arquivo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {
  bancos: any;
  cnabs: any;
  leioutes: any;


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

  editar(editarModal){
    this.modalService.open(editarModal, { size: 'lg' });
  }

  exclude(excluir, banco) {
    this.modalService.open(excluir, { size: 'lg' });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }

  obterLeioutes(){
    this.LeiouteService.obterLeioutes().subscribe(response => {
      this.leioutes.header = response.filter(x => x["tipo"] == 1);
      this.leioutes.detalhe = response.filter(x => x["tipo"] == 2);
      this.leioutes.trailer = response.filter(x => x["tipo"] == 3);
    });
  }
 
}
