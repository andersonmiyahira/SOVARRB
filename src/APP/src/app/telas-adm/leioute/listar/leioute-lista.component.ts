import { Component, OnInit, ViewChild } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { LayoutList } from '../models/layout-list';
import { ValorEsperadoBancoService } from '../../valor-esperado-banco/valor-esperado-banco.service';
import { Layout } from '../models/layout';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetalheValorEsperadoComponent } from './modals/detalhes-valor-esperado/valor-esperado-modal.component';
import { ExcluirLayoutModalComponent } from './modals/excluir/excluir-layout-modal.component';
import { EditarLayoutModalComponent } from 'app/telas-adm/leioute/listar/modals/editar/editar-layout-modal.component';
import { ValorEsperado } from '../../valor-esperado-banco/model/valor-esperado';

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css'],
  providers: [Layout]
})
export class LeiouteComponent implements OnInit {
  @ViewChild('detalhesValorEsperado') childComponentModalDetalhesValorEsperado: DetalheValorEsperadoComponent;
  @ViewChild('excluirLayoutModal') childExcluirLayoutModal: ExcluirLayoutModalComponent;
  @ViewChild('editarLayoutModal') childEditarLayoutModal: EditarLayoutModalComponent;

  bancos: Array<Banco>;

  leioutes: LayoutList;
  layoutFilter: Layout;

  optionsModel: number[];
  valoresEsperados: IMultiSelectOption[];
  private modalReference: NgbModalRef;
  
  constructor(private router: Router,
    private LeiouteService: LeiouteService,
    private bancoService: BancoService,
    private valorEsperadoSevice: ValorEsperadoBancoService,
    private modalService: NgbModal,
    private model: Layout) {
      this.leioutes = new LayoutList();
      this.layoutFilter = new Layout();
  }

  ngOnInit() {

    this.obterBancos();
  }

  novoLeioute() {

    this.router.navigate(['layout-cadastrar']);
  }

  buscarLeioute() {

    this.obterLeioutes();
    this.obterValoresEsperados(this.layoutFilter.bancoId);
  }
  
  obterLeioutes() {

    this.LeiouteService.obterLeioutes().subscribe(response => {
      this.leioutes.layout = response;
    });
  }

  obterBancos() {

   this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterValoresEsperados(bancoId: number) {

    let filter = new ValorEsperado();
    filter.banco = new Banco();
    filter.banco.id = bancoId;
    filter.bancoId = bancoId;

    this.valoresEsperados = [];
    this.valorEsperadoSevice.obterValoresEsperadosPorFiltros(filter).subscribe(res => {
      for(var i = 0; i< res.length; i++){
        var element = res[i];
        var nameFormatado = `${element.descricao} valor: ${element.valor}`;

        this.valoresEsperados.push({ id: element.idValorEsperado, name: nameFormatado });
      }
    });
  }

  /* Abertura de modais */
  editar(editarModal, model) {
     
    this.childEditarLayoutModal.options = this.valoresEsperados;
    this.childEditarLayoutModal.leioutes = this.leioutes;
    this.childEditarLayoutModal.openModal(model);
  }

  exclude(excludeModalId, model) {
     
    this.childExcluirLayoutModal.leioutes = this.leioutes;
    this.childExcluirLayoutModal.openModal(model);
  } 

  detalhesValoresEsperados(model) {

    this.childComponentModalDetalhesValorEsperado.valoresEsperados = model.valoresEsperados;
    this.childComponentModalDetalhesValorEsperado.openModal();
  } 
}
