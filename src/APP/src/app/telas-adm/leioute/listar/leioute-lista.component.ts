import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";
import { ImportarArquivoService } from '../../../importar-arquivo/importar-arquivo.service';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {
  bancos: any;
  cnabs: any;

  constructor(private router: Router, 
              private LeiouteService: LeiouteService,
              private importarArquivoService: ImportarArquivoService) {
  }

  ngOnInit() {
    this.obterBancos();
    this.obterCNAB();
  }

  novoLeioute() {
    this.router.navigate(['leioute-cadastrar']);
  }

  buscarLeioute() {

  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }
 
}
