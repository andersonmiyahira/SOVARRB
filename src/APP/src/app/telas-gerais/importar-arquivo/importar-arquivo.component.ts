import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { ImportarArquivo } from './models/importar-arquivo';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ETipoRegistro } from 'app/shared/enums/e-tipo-registro';
import { ResultadoProcessadoResponse } from '../visualizar-arquivo/models/log-arquivo';

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: ['./importar-arquivo.component.css'],
  providers: [ImportarArquivo]
})
export class ImportarArquivoComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: '' });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  public form: FormGroup;

  bancos: Array<Banco>;
  importar: any;
  model: ImportarArquivo;

  mensagens: ResultadoProcessadoResponse;

  arquivosValidados: boolean;
  exibirResultado: number;

  eTipoRegistro: ETipoRegistro;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService: ImportarArquivoService,
    private modalService: NgbModal,
    private bancoService: BancoService) {
    this.importar = {};
    this.arquivosValidados = false;
    this.exibirResultado = 0;
    this.model = new ImportarArquivo();
    this.mensagens = new ResultadoProcessadoResponse();
  }

  ngOnInit() {

    this.obterBancos();
    this.initFormGroup();
  }

  saveUpload(sucesso): void {

    this.model.fileToUpload = [];
    this.uploader.queue.forEach(element => {
      this.model.fileToUpload.push(element.file.rawFile);
    });

    this.importarArquivoService.upload(this.model)
      .subscribe(res => {
        this.uploader.queue.forEach(element => {
          element.isSuccess = true;
        });
        //this.fileInput.nativeElement.value = "";
        //this.arquivosValidados = true;
        this.modalService.open(sucesso, { size: 'sm' });
      });
  }

  obterBancos() {

    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterResultadoValidacao(filter: number, arquivoId: number) {
    this.importarArquivoService.obterResultadoValidacao(arquivoId).subscribe(response => {
      // if (filter > 0)
      //   response = response.filter(_ => _["ehValido"] === (filter == 1));

      this.mensagens.resultado = response;
    });
  }

  initFormGroup() {

    this.form = new FormGroup({
      banco: new FormControl(this.model.bancoId, [
        Validators.required
      ]),
      cnab: new FormControl(this.model.tipoCNABId, [
        Validators.required
      ]),
      tipoArquivo: new FormControl(this.model.tipoBoletoId, [
        Validators.required
      ])
    });
  }

  onExibirChange() {
    this.obterResultadoValidacao(this.exibirResultado);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  removerTodos() {

    this.uploader.clearQueue();
  }
}
