import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { LayoutList } from '../models/layout-list';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css']
})
export class LeiouteComponent implements OnInit {
  bancos: Array<Banco>;
  leioutes: LayoutList;

  optionsModel: number[];
  valoresEsperados: IMultiSelectOption[];

  constructor(private router: Router,
    private LeiouteService: LeiouteService,
    private bancoService: BancoService,
    private modalService: NgbModal) {
      this.leioutes = new LayoutList();
  }

  ngOnInit() {

    this.obterBancos();
    this.obterValoresEsperados();
  }

  novoLeioute() {

    this.router.navigate(['leioute-cadastrar']);
  }

  buscarLeioute() {

    this.obterLeioutes();
  }

  obterBancos() {

    this.bancoService.obterBancos().subscribe(response => {
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

  obterLeioutes() {

    this.LeiouteService.obterLeioutes().subscribe(response => {
      debugger;
      this.leioutes.layout = response;
      //this.leioutes.header = response.filter(x => x["tipo"] == 1);
      //this.leioutes.detalhe = response.filter(x => x["tipo"] == 2);
      //this.leioutes.trailer = response.filter(x => x["tipo"] == 3);
    });
  }

  detalhesValoresEsperados(detalhesValorEsperado) {

    this.modalService.open(detalhesValorEsperado, { size: 'lg' });
  }
}
