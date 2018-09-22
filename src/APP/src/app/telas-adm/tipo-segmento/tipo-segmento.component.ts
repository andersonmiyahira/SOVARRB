import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSegmentoService } from './tipo-segmento.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BancoService } from '../banco/banco.service';
import { Banco } from '../banco/models/banco';
import { Segmento } from './model/segmento';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-segmento',
  templateUrl: './tipo-segmento.component.html',
  styleUrls: ['./tipo-segmento.component.css'],
  providers: [Segmento]
})
export class TipoSegmentoComponent implements OnInit {
  bancos: Array<Banco>;
  segmentos: Array<Segmento>;

  public form: FormGroup;
  private modalReference: NgbModalRef;

  constructor(private tipoSegmentoService: TipoSegmentoService,
    private bancoService: BancoService,
    private modalService: NgbModal,
    private model: Segmento) {
  }

  ngOnInit() {

    this.initFormGroup();
    this.obterSegmentos();
    this.obterBancos();
  }

  initFormGroup() {

    this.form = new FormGroup({
      bancoId: new FormControl(this.model.banco.id, [
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

  obterSegmentos() {

    this.tipoSegmentoService.obterSegmentos().subscribe(response => {
      this.segmentos = response;
    });
  }


  obterBancos() {

    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  excluir() {

    this.tipoSegmentoService.excluirSegmento(this.model).subscribe(() => {
      var indexObjExcluido = this.segmentos.findIndex(_ => _.idSegmento == this.model.idSegmento);
      this.segmentos.splice(indexObjExcluido, 1);
      this.modalReference.close();
    });
  }

  salvar() {

    if(this.model.idSegmento > 0) {
      this.tipoSegmentoService.atualizarSegmento(this.model).subscribe(() => {
        this.obterSegmentos();
        this.modalReference.close();
      });
    }
    else {
      this.tipoSegmentoService.inserirSegmento(this.model).subscribe(() => {
        this.obterSegmentos();
        this.modalReference.close();
      });
    }
  }

  editarOpenModal(content, segmento) {
    
    this.model = segmento;
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  novoOpenModal(content) {

    this.model = new Segmento();
    this.modalReference = this.modalService.open(content, { size: 'lg' });
  }

  excludeOpenModal(exclude, segmento) {

    this.model = segmento;
    this.modalReference = this.modalService.open(exclude, { size: 'sm' });
  }
}
