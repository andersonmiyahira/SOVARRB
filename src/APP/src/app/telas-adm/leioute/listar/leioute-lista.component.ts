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

@Component({
  selector: 'app-leioute-lista',
  templateUrl: './leioute-lista.component.html',
  styleUrls: ['./leioute-lista.component.css'],
  providers: [Layout]
})
export class LeiouteComponent implements OnInit {
  bancos: Array<Banco>;

  leioutes: LayoutList;
  public form: FormGroup;

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
  }

  ngOnInit() {

    this.obterBancos();
    this.initFomControl();
  }

  novoLeioute() {

    this.router.navigate(['leioute-cadastrar']);
  }

  buscarLeioute() {

    this.obterLeioutes();
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

  obterValoresEsperados(bancoId: number, tipoCNABid: number, tipoBoletoId: number) {

    this.valorEsperadoSevice.obterValoresEsperados().subscribe(res => {
       this.valoresEsperados.push({ id: 1, name: ''});
    });
  }

  initFomControl() {

    this.form = new FormGroup({ 
      descricao: new FormControl(this.model.descricao, [
        Validators.required
      ]),
      posicaoDe: new FormControl(this.model.posicaoDe, [
        Validators.required
      ]),
      posicaoAte: new FormControl(this.model.posicaoAte, [
        Validators.required
      ]),
      obrigatorio: new FormControl(this.model.obrigatorio, [
        Validators.required
      ]),
      valorEsperado: new FormControl(this.model.valoresEsperados, [
        Validators.required
      ]),
      tipoCampoId: new FormControl(this.model.tipoCampoId,[
        Validators.required
      ]),
      language: new FormControl()
    });
  }

  /* Abertura de modais */
  editar(editarModal, model) {
    
    this.model = model;
    this.modalReference = this.modalService.open(editarModal, { size: 'lg' });
  }

  exclude(excludeModalId, model) {
    
    this.model = model;
    this.modalReference = this.modalService.open(excludeModalId, { size: 'sm' });
  } 

  detalhesValoresEsperados(detalhesValorEsperado) {

    this.modalReference = this.modalService.open(detalhesValorEsperado, { size: 'lg' });
  }


  excluir() {
    
    this.LeiouteService.excluirBanco(this.model).subscribe(()=>{
      debugger;
      var indexObjExcluido = this.leioutes.layout.findIndex(_ => _.idLayout == this.model.idLayout);
      this.leioutes.layout.splice(indexObjExcluido, 1);
      this.modalReference.close();
    }); 
  }
}
