import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ValorEsperadoBancoService } from './valor-esperado-banco.service';
import { ValorEsperado } from './model/valor-esperado';
import { Banco } from '../banco/models/banco';
import { BancoService } from '../banco/banco.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-valor-esperado-banco',
  templateUrl: './valor-esperado-banco.component.html',
  styleUrls: ['./valor-esperado-banco.component.css'],
  providers: [ValorEsperado]
})
export class ValorEsperadoBancoComponent implements OnInit {
  bancos: Array<Banco>;
  valoresEsperados: Array<ValorEsperado>;

  public form: FormGroup;
  private modalReference: NgbModalRef;

  constructor(private valorEsperadoBancoService: ValorEsperadoBancoService,
    private bancoService: BancoService,
    private modalService: NgbModal,
    private model: ValorEsperado,
    private _notifications: NotificationsService) {

    this.valoresEsperados = new Array<ValorEsperado>();
  }

  ngOnInit() {

    this.obterBancos();
    this.obterValoresEsperados();
    this.initFormGroup();
  }

  initFormGroup() {

    this.form = new FormGroup({
      bancoId: new FormControl(this.model.banco.id, [
        Validators.required
      ]),
      descricao: new FormControl(this.model.descricao, [
        Validators.required
      ]),
      valor: new FormControl(this.model.valor, [
        Validators.required
      ]),
      tipoBoletoId: new FormControl(this.model.tipoBoletoId, [
        Validators.required
      ]),
      tipoCNABId: new FormControl(this.model.tipoCNABId, [
        Validators.required
      ]),
      ativo: new FormControl(this.model.ativo, [
        Validators.required
      ]),
      language: new FormControl()
    });
  }

  obterBancos() {
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterValoresEsperados() {
    this.valorEsperadoBancoService.obterValoresEsperados().subscribe(response => {
      this.valoresEsperados = response;
    });
  }

  novoOpenModal(content) {

    this.model = new ValorEsperado();
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  editarOpenModal(content, valorEsperado) {

    this.model = valorEsperado;
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  excludeOpenModal(exclude, valorEsperado) {

    this.model = valorEsperado;
    this.modalReference = this.modalService.open(exclude, { size: 'sm' });
  }

  excluir() {

    this.valorEsperadoBancoService.excluirValorEsperado(this.model).subscribe(() => {

      this._notifications.success("Sucesso", "Valor esperado excluído com sucesso.");
      var indexObjExcluido = this.valoresEsperados.findIndex(_ => _.idValorEsperado == this.model.idValorEsperado);
      this.valoresEsperados.splice(indexObjExcluido, 1);
      this.modalReference.close();
    });
  }

  salvar() {

    if (this.model.idValorEsperado > 0) {
      this.valorEsperadoBancoService.atualizarValorEsperado(this.model).subscribe(() => {

        this._notifications.success("Sucesso", "Valor Esperado atualizado com sucesso.");
        this.obterValoresEsperados();
        this.modalReference.close();
      });
    }
    else {
      this.valorEsperadoBancoService.inserirValorEsperado(this.model).subscribe(() => {

        this._notifications.success("Sucesso", "Valor Esperado criado com sucesso.");
        this.obterValoresEsperados();
        this.modalReference.close();
      });
    }
  }

}
