import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarArquivoService } from './importar-arquivo.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { ImportarArquivo } from './models/importar-arquivo';
import { BancoService } from 'app/telas-adm/banco/banco.service';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ETipoRegistro } from 'app/shared/enums/e-tipo-registro';

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: ['./importar-arquivo.component.css'],
  providers : [ImportarArquivo]
})
export class ImportarArquivoComponent implements OnInit {
  
  public uploader: FileUploader = new FileUploader({ url: '' });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  public form: FormGroup;
  
  bancos: Array<Banco>;
  importar: any;
  model: ImportarArquivo;

  mensagens: any; 

  arquivosValidados: boolean;
  exibirResultado: number;

  eTipoRegistro: ETipoRegistro;

  @ViewChild("fileInput") fileInput;

  constructor(private importarArquivoService: ImportarArquivoService,
              private modalService: NgbModal,
              private bancoService: BancoService) {
    this.importar = {}; 
    this.arquivosValidados = false;
    this.mensagens = {};
    this.exibirResultado = 0;
    this.model = new ImportarArquivo();
  }

  ngOnInit() {

    this.obterBancos();
    //this.obterResultadoValidacao(0);
    this.initFormGroup();
  }
  
  saveUpload(sucesso): void {

    this.model.fileToUpload = [];
    this.uploader.queue.forEach(element => {
      this.model.fileToUpload.push(element.file.rawFile);
    });

    // this.model.bancoId = 120;
    // this.model.tipoBoletoId = 1;
    // this.model.tipoCNABId = 1;

    this.importarArquivoService.upload(this.model)
      .subscribe(res => {
        this.uploader.queue.forEach(element => {
          element.isSuccess = true;
        });
        //this.fileInput.nativeElement.value = "";
        this.arquivosValidados = true;
        this.modalService.open(sucesso, { size: 'sm' });
    });
  }

  obterBancos() {
    
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  } 

  obterResultadoValidacao(filter: number){
    this.importarArquivoService.obterResultadoValidacao(1).subscribe(response => {
      if(filter > 0)
        response = response.filter(_ => _["ehValido"]===(filter==1));

      this.mensagens.header = {};
      this.mensagens.header.sucesso = [];
      this.mensagens.header.erro = [];

      this.mensagens.detalhe = {};
      this.mensagens.detalhe.sucesso = [];
      this.mensagens.detalhe.erro = [];

      this.mensagens.trailer = {};
      this.mensagens.trailer.sucesso = [];
      this.mensagens.trailer.erro = [];

      this.mensagens.header.sucesso = response.filter(x => x["tipo"] == 1 && x["ehValido"] == true);
      this.mensagens.header.erro = response.filter(x => x["tipo"] == 1 && x["ehValido"] == false);

      this.mensagens.detalhe.sucesso = response.filter(x => x["tipo"] == 2 && x["ehValido"] == true);
      this.mensagens.detalhe.erro = response.filter(x => x["tipo"] == 2 && x["ehValido"] == false);

      this.mensagens.trailer.sucesso = response.filter(x => x["tipo"] == 3 && x["ehValido"] == true);
      this.mensagens.trailer.erro = response.filter(x => x["tipo"] == 3 && x["ehValido"] == false);
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

    debugger
    console.log(this.form)
    this.uploader.clearQueue();
  }
}
