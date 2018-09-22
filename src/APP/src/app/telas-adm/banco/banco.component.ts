import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from './banco.service';
import { Banco } from './models/banco';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [Banco]
})
export class BancoComponent implements OnInit {
  bancos: Array<Banco>;
  model: Banco;
  id: number;

  public form: FormGroup;
  private modalReference: NgbModalRef;

  constructor(private bancoService: BancoService,
    private modalService: NgbModal) {
    this.id = 0;
    this.model = new Banco();
  }

  ngOnInit() {
    this.initFormGroup();
    this.obterBancos();
  }

  initFormGroup() {

    this.form = new FormGroup({
      id: new FormControl(this.model.id, [
        Validators.required
      ]),
      descricao: new FormControl(this.model.descricao, [
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

  novoOpenModal(content) {

    this.model = new Banco();
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  editarOpenModal(content, banco) {

    this.model = banco;
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  excluirOpenModal(excluir, banco) {

    this.model = banco;
    this.modalReference = this.modalService.open(excluir, { size: 'sm' });
  }

  excluir() {

    this.bancoService.excluirBanco(this.model).subscribe(() => {
      var indexObjExcluido = this.bancos.findIndex(_ => _.id == this.model.id);
      this.bancos.splice(indexObjExcluido, 1);
      this.modalReference.close();
    });
  }

  salvar() {

    this.bancoService.salvarBanco(this.model).subscribe(() => {
      this.obterBancos();
      this.modalReference.close();
    });
  } 
}
