import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { ImportarArquivo } from './models/importar-arquivo';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ETipoRegistro } from 'app/shared/enums/e-tipo-registro';
import { ResultadoProcessadoResponse, LogArquivoResponse } from '../visualizar-arquivo/models/log-arquivo';
import { NotificationsService } from 'angular2-notifications';

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

  response: Array<LogArquivoResponse>;

  arquivosValidados: boolean;
  exibirResultado: number;

  eTipoRegistro: ETipoRegistro;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService: ImportarArquivoService,
    private bancoService: BancoService,
    private _notifications: NotificationsService) {
    this.importar = {};
    this.arquivosValidados = false;
    this.exibirResultado = 0;
    this.model = new ImportarArquivo();
    this.response = new  Array<LogArquivoResponse>();
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
        
        this.arquivosValidados = true;
        this.response = res;

        this.response.forEach(element => {
          element.headerErro = element.resultado.filter(_ => _.tipo == 1 && !_.ehValido);
          element.headerSucesso = element.resultado.filter(_ => _.tipo == 1 && _.ehValido);

          element.detalheErro = element.resultado.filter(_ => _.tipo == 2 && !_.ehValido);
          element.detalheSucesso = element.resultado.filter(_ => _.tipo == 2 && _.ehValido);

          element.trailerErro = element.resultado.filter(_ => _.tipo == 3 && !_.ehValido);
          element.trailerSucesso = element.resultado.filter(_ => _.tipo == 3 && _.ehValido);
        });

        this._notifications.success("Sucesso", "Arquivo(s) importado(s) com sucesso!");
      });
  }

  obterBancos() {

    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
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
